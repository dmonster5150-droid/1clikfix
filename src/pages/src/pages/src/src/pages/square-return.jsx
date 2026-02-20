import { use_search_params } from "react-router-dom";

export default function square_return(){

  const [params] = use_search_params();

  const status = params.get("status");

  return (

    <div>

      {status === "success"
        ? "payment complete"
        : "payment pending"}

    </div>

  );

}
