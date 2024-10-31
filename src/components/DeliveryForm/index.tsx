import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  InputGroup,
  Row,
  ContainerButtons,
  ContinueButton,
  CardContainer,
  OverLay,
  InputGroupRow,
  BackButton,
  StyledParagraph,
  ErrorMessage
} from './styles'
import { cores } from '../../global'
import { RootReducer } from '../../store'
import { Prices } from '../Cart/styles'
import { clearCart } from '../../store/reducers/cart'

type Produto = {
  id: number
  name: string
  price: number
}
type DeliveryFormProps = {
  onClose: () => void
  onComplete: () => void
  title?: string // Adicionando a propriedade title
}

const DeliveryForm = ({ onClose, onComplete }: DeliveryFormProps) => {
  // Função auxiliar para calcular o preço total
  const calculateTotalPrice = (items: Produto[]) =>
    items.reduce(
      (total, item) =>
        total + (typeof item.price === 'number' ? item.price : 0),
      0
    )

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const totalPrice = calculateTotalPrice(items)
  const totalItems = items.length
  const [isPaymentVisible, setPaymentVisible] = useState(false)
  const [isOrderConfirmed, setOrderConfirmed] = useState(false)

  const formik = useFormik({
    initialValues: {
      fullname: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: ''
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required('Nome é obrigatório'),
      address: Yup.string().required('Endereço é obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      cep: Yup.string().required('CEP é obrigatório'),
      number: Yup.string().required('Número é obrigatório'),
      complement: Yup.string(),
      ...(isPaymentVisible && {
        cardDisplayName: Yup.string().required('Nome no cartão é obrigatório'),
        cardNumber: Yup.string()
          .required('Campo obrigatório')
          .matches(/^[0-9]+$/, 'Apenas números são permitidos'),
        expiresMonth: Yup.string()
          .required('Campo obrigatório')
          .matches(/^(0[1-9]|1[0-2])$/, 'Mês deve estar entre 01 e 12'),
        expiresYear: Yup.string()
          .required('Campo obrigatório')
          .matches(/^\d{4}$/, 'Ano inválido'),
        cardCode: Yup.string()
          .required('CVV é obrigatório')
          .matches(/^[0-9]{3,4}$/, 'CVV inválido')
      })
    }),
    onSubmit: (values) => {
      if (!isPaymentVisible) {
        setPaymentVisible(true)
      } else {
        const ORDER_ID = Math.floor(Math.random() * 10000)
        console.log('Pedido realizado com dados: ', values)

        setOrderConfirmed(true)
        setPaymentVisible(false)
        dispatch(clearCart())

        setTimeout(() => navigate('/'), 1000)
      }
    }
  })

  return (
    <>
      {isOrderConfirmed ? (
        <CardContainer>
          <h2>Pedido realizado - {Math.floor(Math.random() * 10000)}</h2>
          <StyledParagraph>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </StyledParagraph>
          <ContinueButton
            onClick={() => {
              onClose()
              onComplete()
            }}
          >
            Concluir
          </ContinueButton>
        </CardContainer>
      ) : (
        <>
          <OverLay onClick={onClose} />
          <CardContainer>
            <h2>Entrega</h2>
            <Prices>
              Valor total
              <span>R$ {totalPrice.toFixed(2)}</span>
              {totalItems} {totalItems === 1 ? 'item' : 'itens'}
            </Prices>

            <form onSubmit={formik.handleSubmit}>
              <Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="fullname">Quem irá receber</label>
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      value={formik.values.fullname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      aria-required="true" // Melhora a acessibilidade
                    />
                    {formik.touched.fullname && formik.errors.fullname && (
                      <ErrorMessage>{formik.errors.fullname}</ErrorMessage>
                    )}
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      aria-required="true"
                    />
                    {formik.touched.address && formik.errors.address && (
                      <ErrorMessage>{formik.errors.address}</ErrorMessage>
                    )}
                  </InputGroup>
                </Row>

                <Row>
                  <InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      aria-required="true"
                    />
                    {formik.touched.city && formik.errors.city && (
                      <ErrorMessage>{formik.errors.city}</ErrorMessage>
                    )}
                  </InputGroup>
                </Row>
                <InputGroupRow>
                  <InputGroup>
                    <label htmlFor="cep">CEP</label>
                    <input
                      id="cep"
                      name="cep"
                      type="text"
                      value={formik.values.cep}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      aria-required="true"
                    />
                    {formik.touched.cep && formik.errors.cep && (
                      <ErrorMessage>{formik.errors.cep}</ErrorMessage>
                    )}
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="number">Número</label>
                    <input
                      id="number"
                      name="number"
                      type="text"
                      value={formik.values.number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      aria-required="true"
                    />
                    {formik.touched.number && formik.errors.number && (
                      <ErrorMessage>{formik.errors.number}</ErrorMessage>
                    )}
                  </InputGroup>
                </InputGroupRow>
                <Row>
                  <InputGroup>
                    <label htmlFor="complement"> Complemento(opcional) </label>
                    <input
                      id="complement"
                      name="complement"
                      type="text"
                      value={formik.values.complement}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </InputGroup>
                </Row>
              </Row>
              <ContainerButtons>
                <ContinueButton type="submit">
                  Continuar com o pagamento
                </ContinueButton>
                <BackButton
                  onClick={onClose}
                  title="Voltar ao carrinho"
                  bgColor={cores.rosaclaro}
                >
                  Voltar ao carrinho
                </BackButton>
              </ContainerButtons>
            </form>
          </CardContainer>

          {isPaymentVisible && (
            <CardContainer>
              <div className="totalvalue">
                <h2>Pagamento - </h2>
                Valor total: R$ {totalPrice.toFixed(2)}
              </div>
              <form onSubmit={formik.handleSubmit}>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      id="cardDisplayName"
                      name="cardDisplayName"
                      type="text"
                      value={formik.values.cardDisplayName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      aria-required="true"
                    />
                    {formik.touched.cardDisplayName &&
                      formik.errors.cardDisplayName && (
                        <ErrorMessage>
                          {formik.errors.cardDisplayName}
                        </ErrorMessage>
                      )}
                  </InputGroup>
                </Row>
                <InputGroupRow>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      id="cardNumber"
                      name="cardNumber"
                      type="text"
                      value={formik.values.cardNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      aria-required="true"
                    />
                    {formik.touched.cardNumber && formik.errors.cardNumber && (
                      <ErrorMessage>{formik.errors.cardNumber}</ErrorMessage>
                    )}
                  </InputGroup>
                  <InputGroup maxWidth="54px">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      id="cardCode"
                      name="cardCode"
                      type="text"
                      value={formik.values.cardCode}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      aria-required="true"
                    />
                    {formik.touched.cardCode && formik.errors.cardCode && (
                      <ErrorMessage>{formik.errors.cardCode}</ErrorMessage>
                    )}
                  </InputGroup>
                </InputGroupRow>
                <InputGroupRow>
                  <InputGroup>
                    <label htmlFor="expiresMonth">Mês de validade</label>
                    <input
                      id="expiresMonth"
                      name="expiresMonth"
                      type="text"
                      value={formik.values.expiresMonth}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      aria-required="true"
                    />
                    {formik.touched.expiresMonth &&
                      formik.errors.expiresMonth && (
                        <ErrorMessage>
                          {formik.errors.expiresMonth}
                        </ErrorMessage>
                      )}
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="expiresYear">Ano de validade</label>
                    <input
                      id="expiresYear"
                      name="expiresYear"
                      type="text"
                      value={formik.values.expiresYear}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      aria-required="true"
                    />
                    {formik.touched.expiresYear &&
                      formik.errors.expiresYear && (
                        <ErrorMessage>{formik.errors.expiresYear}</ErrorMessage>
                      )}
                  </InputGroup>
                </InputGroupRow>

                <ContainerButtons>
                  <ContinueButton type="submit">
                    Confirmar pagamento
                  </ContinueButton>
                  <BackButton
                    onClick={() => {
                      setPaymentVisible(false)
                    }}
                    title="Voltar ao formulário de entrega"
                    bgColor={cores.rosaclaro}
                  >
                    Voltar ao formulário de entrega
                  </BackButton>
                </ContainerButtons>
              </form>
            </CardContainer>
          )}
        </>
      )}
    </>
  )
}

export default DeliveryForm
