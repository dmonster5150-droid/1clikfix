import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

/**
 * Subscribe to jobs for a specific provider
 * @param {string} providerId - The provider's user ID
 * @param {Function} callback - Callback function to receive job updates
 * @returns {Function} Unsubscribe function
 */
export function subscribeToJobs(providerId, callback) {
  const jobsRef = collection(db, "jobs");
  const q = query(jobsRef, where("providerId", "==", providerId));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const jobs = [];
    snapshot.forEach((doc) => {
      jobs.push({ id: doc.id, ...doc.data() });
    });
    callback(jobs);
  });

  return unsubscribe;
}

/**
 * Update the status of a job
 * @param {string} jobId - The job document ID
 * @param {string} status - The new status (e.g., "pending", "accepted", "completed")
 * @returns {Promise<void>}
 */
export async function updateJobStatus(jobId, status) {
  const jobRef = doc(db, "jobs", jobId);
  await updateDoc(jobRef, { status });
}
