import { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ProviderOnboarding() {
  const [skillLevel, setSkillLevel] = useState("");
  const [over18, setOver18] = useState(false);
  const [agree, setAgree] = useState(false);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  async function handleSubmit() {
    if (!skillLevel || !over18 || !agree) return alert("All fields required");
    setSaving(true);

    await setDoc(doc(db, "providers", user.uid), {
      uid: user.uid,
      email: user.email,
      skillLevel,
      approved: false,
      createdAt: Date.now(),
    });

    navigate("/provider-dashboard");
  }

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Provider Setup</h1>
      <p>Payment confirmed. Complete your onboarding below:</p>

      <label>Skill Level</label>
      <select value={skillLevel} onChange={e => setSkillLevel(e.target.value)}>
        <option value="">Choose...</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Professional">Professional</option>
      </select>

      <br /><br />

      <label>
        <input
          type="checkbox"
          checked={over18}
          onChange={() => setOver18(!over18)}
        /> I confirm I am 18+
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
        /> I agree to the provider terms of service
      </label>

      <br /><br />

      <button disabled={saving} onClick={handleSubmit}>
        {saving ? "Saving..." : "Finish Setup"}
      </button>
    </div>
  );
}
