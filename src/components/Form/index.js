import {Container} from "./style";
export default function Form() {

  return (
    <Container>
      <form method="post" action="https://app.rdstation.com.br/signup">
        <header>
          <h4>Comece seus 10 dias de teste grátis do RD Station Marketing!</h4>
          <h5>Não precisa cadastrar cartão de crédito. 😉</h5>
        </header>
        <label >Digite seu nome</label>
        <input
          type="text"
          name="name"
          placeholder="Insira seu nome"
        />
        <label >Seu email de trabalho</label>
        <input
          type="email"
          name="email"
          placeholder="Insira seu e-mail"
        />
        <label >Seu telefone</label>
        <input
          type="tel"
          name="telefone"
          placeholder="Insira seu número de telefone com DDD"
        />

        <label >Seu cargo de ocupação</label>
        <select
          name="cargo"
          placeholder="Age..."
        >
          <option value="ceo">Sócio(a) / CEO / Proprietário(a</option>
          <option value="diretorVendas">Diretor(a) de Vendas</option>
          <option value="diretorMarketing">Diretor(a) de Marketing</option>
          <option value="diretorOA">Diretor(a) Outras Áreas</option>
          <option value="gerenteVendas">"Gerente de Vendas</option>
          <option value="supervisorMarketing">
            Coordenador(a)/Supervisor(a) de Marketing
          </option>
          <option value="supervisorVendas">Coordenador(a)/Supervisor(a) de Vendas</option>
          <option value="analistaMarketing">Analista/Assistente de Marketing</option>
          <option value="analistaVendas">Analista/Assistente de Vendas</option>
          <option value="vendedorContas">Vendedor(a) / Executivo(a) de Contas</option>
          <option value="estudante">Estudante</option>
          <option value="OC">Outros Cargos</option>

        </select>

        <label >Crie uma senha</label>
        <input
          type="password"
          name="password"
          placeholder="Digite sua senha"
        />
        <label >Confirme sua senha</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua senha"
        />
        <label>Qual o site da sua empresa</label>
        <input type="radio" name='site' id="site" />
        <label htmlFor='site'>Meu site é </label>
        <input
          type="text"
          name="site"
          placeholder="Insira o endereço do seu site"
        />
        <input type="radio" name='site' id="site" />
        <label htmlFor='site'>Ainda não tenho um site  </label>

        <ul>
          <li>
            Ao criar minha conta estou de acordo com os termos de uso do software e política de privacidade.
          </li>
          <li>
            Ao preencher o formulário, concordo em receber comunicações de acordo com meus interesses.
          </li>
          <li>
            *Você pode alterar suas permissões de comunicação a qualquer tempo.
          </li>
        </ul>
        <button>criar minha conta </button>
      </form>
    </Container >
  )
}