import { useState, useEffect } from "react";

export default function Challenges() {
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [code, setCode] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value.slice(0, 4); // Ensure only 4 digits
    setCode(value);
  };

  const fetchChallenge = async () => {
    setError("");
    setDescription("");

    try {
      const response = await fetch(`/api/get-challenge?code=${code}`);
      const data = await response.json();

      if (response.ok) {
        setDescription(data.description);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Failed to find a challenge with the given code");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.length === 4) {
      fetchChallenge();
    } else {
      setError("Code should contain 4 digits");
    }
  };

  if (!isClient) {
    return null; // Ensure no mismatched content during SSR
  }

  return (
    <div className="mb-2">
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="number"
            value={code}
            onChange={handleChange}
            className="mb-4 p-2 border rounded text-center text-black"
            placeholder="Enter 4-digit code"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </form>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {description && (
          <div className="mt-4 p-4 bg-gray-100 rounded text-black">
            <h2>
              <b> Din utmaning för kvällen</b>
            </h2>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
