import {
  HomeContainer,
  HomeBackground,
  HomeContentGrid,
  HomeFooterItems,
  FooterItem,
  SectionContainer,
  SectionContentGrid,
} from './styles'

import homeBackground from '../../assets/homeBackground.svg'
import coffeeHero from '../../assets/coffeeHero.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeCard } from './components/CoffeeCard'
import { useContext } from 'react'

import { CoffeeContext } from '../../contexts/CoffeeProducts'

const coffees = [
  {
    id: crypto.randomUUID(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    tags: ['tradicional'],
    image:
      'https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1668384000&Signature=csCRm8PWo1v7cD1WPFgoqbiTjL2WJ08LArCDTCotaJU2uhLjTXQ0KqAzrDUgoIze0xJLhc4xEgDPHFm~UULfUdhm4wVv0cZD5cawiAgdCnKA0mjktV8s18miXgIVNvBCUSaQCZYUJNU0WlhR7zYqJoKhvAf9MzGr~t9D-FlxI~-d4prdxjpyh4f-knza-Bw1~XMefoTXMhkUjzFzfg06NWtI5naRJJ49qtiQ0kqtN7TTBf9Ac0Zk~R7C89xli1R2BhxQUcPRS-cB075nbYpRMYugpI~1syQ8sis4STRU1OpzqabOSiCVvRx--MCYWHSD53StP6WVS1ye~GJEuMc55A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: crypto.randomUUID(),
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    tags: ['tradicional'],
    image:
      'https://s3-alpha-sig.figma.com/img/b6af/775d/aaa94dcb37dfe1ee6535aae5b9356e9a?Expires=1668384000&Signature=fDdKri1xNWmekpqam1U1ZqZ8usyNB8NTJLDuy9QZkZyhwzFKmRnfL6uP~mQxAo93qQFIZY9PUylvXxHSnMLJjiUiAVmFn5EobW3nZOPY1QEpHgWMzo7BNmv6C2NoJeQQz96iLW5l4cUj1PlePpdCZ0g1RklqJhrDY-ZgvpfhCKFbDkQESeCzSAPMTGTBd3pVmVhB6IfcImrMHDbReOP4T3qPxNMbLS42FqASQY4Eo2Z2ALWE-6U8Dz5O8rI20fQMJ7Z4aJwTZxbcCsfvS0q2gQfqmzshqogw1UKCfZN2BvkX41KZhwHhv3eyutw5BQ0t-LXOaGZXrmn~YDSvvAjMBQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: crypto.randomUUID(),
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    tags: ['tradicional'],
    image:
      'https://s3-alpha-sig.figma.com/img/bcfa/72ad/62a8600eeded092c17fd14240624545e?Expires=1668384000&Signature=atITYlomvBILB5NMZVbyKf1fRk5kR2JGxHL845X3ECGrvlQCUaFQlq4BOYqRqclL0w1uzl2OdPLE6oaqDRsEsd0UV9T40J1X~nUjOZcOCYOO2eSQsnyh12c9MG7jK-wOAB0oW3szJ2-X2ZQdbkcLKgMoQizje4AyZ3vDuJDkj9rN5QkEQlxJtQHLaluUbBTsthmOlhS1~7MOjb5NFagpIfgRa67lQEeJVioSX39zE4ep4LI4ncSH2FwzgniJsRdgtxDq0L9pt9GCLdyhuGVCIbQDZmSdrpf9EeYZUbrW6KfN220Erjaulnuuj76c26At-QGmE4GBGzKRM7~g2hkMEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: crypto.randomUUID(),
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    tags: ['tradicional', 'gelado'],
    image:
      'https://s3-alpha-sig.figma.com/img/f389/2f36/d263d0013831cd5b1fb27c6d2ac64353?Expires=1668384000&Signature=P5JWv2X9c3D1B-V06XI791RMW5v-7krOfdAdBHjpNSoM3iTISe069FnxOTV6hkl-iW~dMYJm~aeBYkEXZgeb2jVuk9BUWf2hMShj0-Ltq3WHXDs02XCvhCxNQNw~-sacQ2VE5nzhtYJl-F8EuVvri3PDA9jtR0OXuzAf-jNuPB93OhhztVSmrkHO5g09mhq~GCF9YQVOoTufVoJrGikbkT8LXqFVh1LlQWuNFcpiFZjI0Cn~shuBux94uAKs5IXYE5gAoKgIFE8FfVJOhcRbyD~yOEdnTKw4iybbXJWFbX2HjekJlz2RivHKL7GxvkO5fp-pGZUHosQ47DqSCQwuXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: crypto.randomUUID(),
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    tags: ['tradicional', 'com leite'],
    image:
      'https://s3-alpha-sig.figma.com/img/96a1/748f/55962d2032bd0e2555d1261409dbd24d?Expires=1668384000&Signature=hC2A0-trEz-U6qFgS1WUeY6rogtXTrVL0w2BOIv~UrzYHiMJ0eat-KQntJxBLdpCr7PSjHiMnKMFqtGuBfAZGdO1EHXupUVGhoBY3EkoWI5Yj4NYgWcy6ScjTZk~3vyAP8PixosyFhUDYpG3VDPGYc35lQnEeol3LXKDee-VZDvvD7VSPmz8VQQRLgqSG12zIObcT~5JPo1GU0JGgG1mqWNx~39dTx4GuI0iAS~aeVMmpvnGF-ZaB1Nk9G9ig3J~Ei1r2FzFIodqNaGU8m0c7jRbjgqtP2mrB-8gtDPCxqYzA3-4FaoA~fCwLOFyLapQCm2uGKtM5usoiTH2mJifew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: crypto.randomUUID(),
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    tags: ['tradicional', 'com leite'],
    image:
      'https://s3-alpha-sig.figma.com/img/0a3c/9586/9a75d3fa0ffdecc4bc46ca83d2342e1c?Expires=1668384000&Signature=fpTM3Jc~9DFTuko1z1gmiqal-xlNaEaGhN3jzhi7LXrCcN6HmC36syrW1K8NqXHdAqmczVG0I6E63uzxqWHjvqtJCKM1XqNWMgNUxWnIK4l2VVa7mQD4AsqrC3ztti2Lr96lLn6srA0BBzTkETprgay1tlgJgA8BEMwNTc7HvTf04Fsu6NsQBfO86Q9hDcJj7xjxf25R8kqwXRYjeX1yWOnnjQS0rdAU2H5uRjuXCbn9JzviaD9hJPzDRAtXmQucmJP1yXg9uDe2XFEJZ4-EWvM7ijz-AM4mPiLn1c2gMe0bIPUPmHFz6GtLjUxh0xlqpe8Z7slWav36VMaGWefhDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: crypto.randomUUID(),
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    tags: ['tradicional', 'com leite'],
    image:
      'https://s3-alpha-sig.figma.com/img/6693/81b7/0a9565b6f322ac8b5229ee4fc4b47825?Expires=1668384000&Signature=Fpfe0KlkONh6Uc7OWBPdEJCjoyvrwWY128X4-cRY93r1McGTjVe31yR6VaMRaOt3G~~zze-e6-bBllrLMRbLURH7LxXndDnDLWP8KT7Ok4SKnVxiw5pDLrghm-VxmwbE5QccMabhLF7pqUWjlNLBTq0ZMDil0WO~zHZ5vnwzNNIrd21pHsoAF8UALvqjrz7AaMQ0BU00WJlY8oJ3wsZxdsQVSOvesXk7pl~1-XZhg7OkD8wcSKMOt9ND2oB-JbNXZPX1San-1ZPvTVl69HYcuOm0IRy4qFNAcH8t9PDT4ZPkxdBmhaV3fqYkO3gkl-VhqqQEc0uG-qmPl-2nBHLatg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: crypto.randomUUID(),
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    tags: ['tradicional', 'com leite'],
    image:
      'https://s3-alpha-sig.figma.com/img/890a/8773/a655c4fabfc9a7ecdc389e6ea93587ac?Expires=1668384000&Signature=YjAj7vX4HtJNicSD2DWLo2Vy6JsgeLn6X4YOsxvyaWnRAwUOxnmfe2vINddQEH8dtQmM9S~sA5w0DF6qe4ZeU5z46IHl59xFFZp2WJQLhf7ON2QGW4QKGoidIqRLls4vAfilAjCsWcQ3TqeLWJCOGAwlq2PM6JC-vZ67DiJDXs4ox-i5~U1Ra9vdh2y-sabauEBpDPRgOVKoeQUeiTvk8SxJd25mIEtcnNR74jsUnyXkJvSgaiNiDuUcLzJUmHiBN4XnwRcuDhshs-ESEZ4jg-Ir8f1X-uquRcAUMsQLHEwGa5M8R6TKcW1iC0UfMwW3E2GPVOmzimVH4vxzhuBFJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: crypto.randomUUID(),
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    tags: ['tradicional', 'com leite'],
    image:
      'https://s3-alpha-sig.figma.com/img/bc3e/4798/837b2a3ba5d0fa098e7e39985025efb7?Expires=1668384000&Signature=Lr1CeNCjGiZpfidlM~dWlBh5R3RgC2ytTg-3tOF69939G4HW5JZ5t5Su1kuGKJkHA5~CRG5plueTW~kkClfIMHPOamPdcavmGueQoTD4rKJbTkFxJ9zBqItXaKtIkphQD1tPYtfYDBt8CYowMNlGGEIZFviCyFU~xw8k93dbSVhyW32G3mShk88LAowUw74DGLmFqNT9Ol~9zYM8lGZMg15ZMnyDD7LXiMQ~Jhqg5SjcKwF~3cd~ymcUhJHhPWT1tHYEjoCTBbWDWm7nwB3DVzPXnge3MxBS-6ucNgzGv2jnR0Nl8OS4wN4NqphVvesstpkmlTBrV4vaIlSUQAmbdQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: crypto.randomUUID(),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    tags: ['especial', 'com leite'],
    image:
      'https://s3-alpha-sig.figma.com/img/4462/16dc/20b9de473c3aadc304466df059e1887e?Expires=1668384000&Signature=OtLsmt2hcMIOwTPsoarPM7HkJhMelA9KXj8Ks73Di4oWe1tZEm0B5MQ1JjQqIPReUdVB32xjLNGShF8y060ZVZr1j2ShdKeKIteV6vauc0NYaeJzuom-y~Xa7Uco6k9RdeyfuPmJXoKN-axvRHqpzpoWQvC9gXytgML-OpeOvz5IjXspan2BxMCMEpNaXjCg5WPCPiTiZEE0FMSjROWAO0ZMLYZWk2uyOyb-iTwR2xTMgf~L2Awi2kx2Y~pUaiaoar9eqoIRGnGH-axAHoENUDehaL0SlnkLHVWhY7tWew-dY7247GqtBZlPKEiKl6UzQBPI1vcGyKl1JH9PQso3nA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: crypto.randomUUID(),
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    tags: ['especial', 'alcoólico', 'gelado'],
    image:
      'https://s3-alpha-sig.figma.com/img/dae3/2866/45ab1873edeac1c90c31203f5bf3ed52?Expires=1668384000&Signature=RZeveypC2g9M34J8Pz3V0fYWvqESP2fMafxeuPVliAO8JJ1FhMaUYMN53v4u7nAFM5tj6uUwFHR6pGi~BVEFkEReev169w7Iibzh-zJZrBFzWAxm8gQ50AUJbLKcZnCLLjqXSAIWAPw7NC0NKxgKPI1dSNyy0dbBMApykvleLXWT0jxofS2NMT7skHb35JSczKm5f-AqvHr9xHKDlZW7mpnfSszHW9~6PhE2oBLlMEdxjxFMY4j1qipYef5QBKyb2Lie-23P3YVP8dYWkfzHsiZoMcfzaNgp9F9GsrSiEhAWnSBF5JMiEglaMB09cl2tlj80wPvAcHGWVEBiXTtSXA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: crypto.randomUUID(),
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    tags: ['especial', 'alcoólico', 'gelado'],
    image:
      'https://s3-alpha-sig.figma.com/img/64fd/9a26/b6d3187556021c2da9fc80f2da41088f?Expires=1668384000&Signature=Rg9SAj~Es7g7yc11uIbSOJHV7dftCj~gdHwciES6xlG6ZkGnftXy1gXSSB-~hVoMET3R9kmIFy0L5Mi7SJuIgHHpBlIC8hOcL5PXHOtYjtVFGj3nKfeW~xW5yNEHX624pX1f9wOQ07BJkoHni90ZFKEy6Q2MEtL~W4Gc5SNREj9Tf4hFe3GDEaDZBdddkSpykI1ds~Sjo-hTLx899tDGO9XlZNkyYuGwxepmvXRzqXwMPgg5P6P5s8Uhtuv2w7ZsE4WM9bak0cLAxf1jfJxOgLOR-4A7kZtT2I8ucqJa8KA22qFHsMGs-fNEPEIhxbPMWFGAG2KQTIq5vmNVo2AtPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: crypto.randomUUID(),
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    tags: ['especial'],
    image:
      'https://s3-alpha-sig.figma.com/img/8bcb/3d33/7b04857330d98e72e67bde570cbc8963?Expires=1668384000&Signature=Ficl9rEKwHJ1rex12SgIOWFCcY70R80VqpRzqkc7y7KP~Tlu~b8jUFurzJb1uv75MIUZy1CYeC8X5J6lRQnQStQWt62~5QOo4lLvrjfAS9aYYFHqPpUh8aYLBxQ6orU6fwA8ZDszadb4LUVl0CW5Ug1w8xLJ6iPsQWbBDYhKFbm6iHUdBmRqvW-l50btQBM~NoOWteMoIKqOARD5Pf5XOUCEP4q8Qv2aET7TrYh0ej2fy7zIyLJDBwNRzQ~~mGENsPYTBnfvDZKIDVs2f7kIdAXc3HImsNqBDTUbLlIkPF38yVObLUAxREC3svtGYRuGsnLOg8zQa9gk3G9hqrmfkA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: crypto.randomUUID(),
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    tags: ['especial', 'alcoólico'],
    image:
      'https://s3-alpha-sig.figma.com/img/53b9/9cd5/c0cac4ecf7b9bd81c976cdd9fe2ab3a3?Expires=1668384000&Signature=aLu45nNhQs4NMX-Qcp~zhhyaOO~ZgFXdhHsdGO8m918ZVMO3py6sBzom~DE7Uo-AhwVsNsozYUmgrVZYy8-oRLFAdYqKPX4LFPKYykzf8hV4rfJgC524afC5BrUjaX8Oa~H2sHBODuF4mJKFQkrNnZ63V3TfCZBM5S~IKqzsDsosJUJu00dmXPHODi~AgANCIFWGUOomSp~omb11HksJb-Y8Tzp8d~PMilqT6G22Prf8QTppdOZiNGphTjDmNBM2wCDFPBw1kj-iYCCEcKHbz0elC7BtKNYZGuL5CfZXCOSf0IVaJD5HPOJnyWe5NkEw4BGMF405piMhXCvAphQYAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
]

export function Home() {
  const { description } = useContext(CoffeeContext)

  return (
    <>
      <HomeContainer>
        <HomeBackground>
          <img src={homeBackground} alt="" />
        </HomeBackground>
        <HomeContentGrid>
          <div>
            <h1>{description}</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <HomeFooterItems>
              <FooterItem width="14.4375rem" color="yellow-dark">
                <div>
                  <ShoppingCart size={22} weight="fill" />
                </div>
                <span>Compra simples e segura</span>
              </FooterItem>
              <FooterItem width="18.375rem" color="base-text">
                <div>
                  <Package size={22} weight="fill" />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </FooterItem>
              <FooterItem width="14.4375rem" color="yellow">
                <div>
                  <Timer size={22} weight="fill" />
                </div>
                <span>Entrega rápida e rastreada</span>
              </FooterItem>
              <FooterItem width="18.375rem" color="purple">
                <div>
                  <Coffee size={22} weight="fill" />
                </div>
                <span>O café chega fresquinho até você</span>
              </FooterItem>
            </HomeFooterItems>
          </div>
          <img src={coffeeHero} alt="" />
        </HomeContentGrid>
      </HomeContainer>
      <SectionContainer>
        <h2>Nossos cafés</h2>
        <SectionContentGrid>
          {coffees.map((coffee) => (
            <CoffeeCard data={coffee} key={coffee.id} />
          ))}
        </SectionContentGrid>
      </SectionContainer>
    </>
  )
}
