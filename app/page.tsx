import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500 to-purple-800 ">
            <div className="space-y-6 text-center">
                <h1 className="text-6xl  drop-shadow-md">🔐 Connexion</h1>
                <p className="text-lg">Connectez-vous à Stream Line</p>
                <div>
                    <LoginButton mode="redirect">
                        <Button variant="secondary" size="lg">
                            Se connecter
                        </Button>
                    </LoginButton>
                </div>
            </div>
        </main>
    );
}
