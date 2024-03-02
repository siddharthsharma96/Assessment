const SigninButton = ({ handleSignIn, operation }) => {
  return (
    <button
      onClick={handleSignIn}
      className="bg-skillgreen px-2 py-1 rounded-md text-white"
    >
      {operation === "signin" ? "Sign In" : "Sign up"}
    </button>
  );
};

export default SigninButton;
