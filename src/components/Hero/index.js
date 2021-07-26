import Form from "../Form";
import {Container} from "./style";

export default function Hero() {


  return (

    <Container>
      <div className="cover">
        <div className='oportunidade'>
          <h1>
            Gere mais <span>oportunidades </span>
            para seu negócio
          </h1>
          <p>
            O RD Station Marketing é um software para sua empresa fazer campanhas
            melhores, nutrir Leads, gerar oportunidades comerciais qualificadas e
            alcançar mais resultados.
          </p>
        </div>
        <div className="form-area">
          {/* Formulario não atende os requesitos funcionais! */}
          <Form />
        </div>
      </div>
      <article>
        <h3>
          Estaremos juntos desde o primeiro passo!
        </h3>
        <p>
          Se você ainda não sabe como extrair o máximo das ações digitais,
          não tem problema. O RD Station Marketing é mais que uma ferramenta,
          nos importamos com os seus resultados.
          Estaremos com você do planejamento até a prática!
        </p>
      </article>
      <section>

      </section>
    </Container>
  )
}