import CardWrapper from "./CardWrapper";

const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Ravi de vous revoir"
            backButtonLabel="Vous n'avez pas de compte ?"
            backButtonHref="/auth/register"
            showSocial
        >
            LoginForm
        </CardWrapper>
    );
};
export default LoginForm;
