"use client";
import { gql, useMutation } from "@apollo/client";

const SEND_CODE = gql`
  mutation SendCode($code: String!) {
    sendCode(code: $code) {
      success
    }
  }
`;

function GglPage() {
  const [sendCode, { data, loading, error }] = useMutation(SEND_CODE);

  const handleSubmit = async (code: string) => {
    try {
      const { data } = await sendCode({ variables: { code } });
      const { success } = data.sendCode;

      if (success) {
        console.log(success);
      } else {
       
        console.error("Failed to send code.");
      }
    } catch (err) {
      console.error("Error sending code:", err);
    }
  };

  return (
    <div>
      <h1>Send Code </h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <button onClick={() => handleSubmit("8787")}>Send Code</button>
    </div>
  );
}

export default GglPage;
