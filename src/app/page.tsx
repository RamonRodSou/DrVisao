import '@css/main.scss'
import HeroSection from "./_component/heroSection";
import doctorImg from '@img/01_doctor.png';
import exameImg from '@img/02_exame.png';
import Menu from './_component/menu';
import Solution from './_component/solution';

export default function Home() {
    return (
        <div>
            <header>
                <Menu />
            </header>
            <main>
                <section>
                    <HeroSection
                        highligh="Doutor Visão"
                        title=", porque enxergar bem é viver melhor"
                        description="Exames de vista acessíveis, atendimento rápido e sem filas de espera. Cuidados completos para sua visão com conforto e segurança."
                        image={doctorImg}
                    />
                    <HeroSection
                        highligh="Exame feito no seu tempo"
                        title=", e do jeito que você prefere"
                        description="Nossa Missão é transformar a vida das pessoas através da saúde visual, proporcionando acesso a exames de vista imediatos, acessíveis e precisos."
                        image={exameImg}
                        reverse={true}
                    />
                </section>
                <Solution />
            </main>
            <footer>

            </footer>
        </div>
    );
}


