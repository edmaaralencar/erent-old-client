import Button from 'components/Button'
import Router from 'next/router'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import * as S from './styles'

function SearchBox() {
  const [region, setRegion] = useState('Nordeste')
  const [rooms, setRooms] = useState(0)
  const [dailyPrice, setDailyPrice] = useState(0)
  const [selectType, setSelectType] = useState({
    type: '',
    isOpen: false
  })

  function teste() {
    console.log(
      `/properties?price=${dailyPrice}&region=${region}&rooms=${rooms}`
    )

    Router.push({
      pathname: '/properties',
      query: { page: 1, price: dailyPrice, region, rooms }
    })
  }

  function handleCloseSelect() {
    setSelectType({
      type: 'hi',
      isOpen: false
    })
  }

  return (
    <S.Wrapper>
      <S.SearchInput
        onClick={() => setSelectType({ type: 'region', isOpen: true })}
      >
        <S.SearchInfo>
          <strong>Região</strong>
          <p>{region === '' ? 'Todas' : region}</p>
        </S.SearchInfo>
        <div className="cursor">
          <FiChevronDown size={24} color="#8B8C8F" />
        </div>
        {selectType.type === 'region' && selectType.isOpen && (
          <S.ListContainer onClick={event => event.stopPropagation()}>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setRegion('')
              }}
            >
              Todas
            </S.ListItem>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setRegion('Nordeste')
              }}
            >
              Nordeste
            </S.ListItem>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setRegion('Norte')
              }}
            >
              Norte
            </S.ListItem>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setRegion('Centro-oeste')
              }}
            >
              Centro oeste
            </S.ListItem>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setRegion('Sul')
              }}
            >
              Sul
            </S.ListItem>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setRegion('Sudeste')
              }}
            >
              Sudeste
            </S.ListItem>
          </S.ListContainer>
        )}
      </S.SearchInput>
      <S.Divider />
      <S.SearchInput
        onClick={() => setSelectType({ type: 'rooms', isOpen: true })}
      >
        <S.SearchInfo>
          <strong>Quartos</strong>
          <p>{rooms}</p>
        </S.SearchInfo>
        <div className="cursor">
          <FiChevronDown size={24} color="#8B8C8F" />
        </div>
        {selectType.type === 'rooms' && selectType.isOpen && (
          <S.ListContainer onClick={event => event.stopPropagation()}>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setRooms(1)
              }}
            >
              1 quarto
            </S.ListItem>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setRooms(2)
              }}
            >
              2 quartos
            </S.ListItem>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setRooms(3)
              }}
            >
              3 quartos
            </S.ListItem>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setRooms(4)
              }}
            >
              4 quartos
            </S.ListItem>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setRooms(5)
              }}
            >
              5 quartos
            </S.ListItem>
          </S.ListContainer>
        )}
      </S.SearchInput>
      <S.Divider />
      <S.SearchInput
        onClick={() => setSelectType({ type: 'daily_price', isOpen: true })}
      >
        <S.SearchInfo>
          <strong>Diária</strong>
          <p>{dailyPrice}</p>
        </S.SearchInfo>
        <div className="cursor">
          <FiChevronDown size={24} color="#8B8C8F" />
        </div>
        {selectType.type === 'daily_price' && selectType.isOpen && (
          <S.ListContainer onClick={event => event.stopPropagation()}>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setDailyPrice(500)
              }}
            >
              Até 500
            </S.ListItem>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setDailyPrice(1000)
              }}
            >
              Até 1000
            </S.ListItem>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setDailyPrice(1500)
              }}
            >
              Até 1500
            </S.ListItem>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setDailyPrice(2000)
              }}
            >
              Até 2000
            </S.ListItem>
            <S.ListItem
              onClick={() => {
                handleCloseSelect()
                setDailyPrice(2500)
              }}
            >
              Até 2500
            </S.ListItem>
          </S.ListContainer>
        )}
      </S.SearchInput>
      <S.Divider />
      <Button type="button" onClick={teste} size="small">
        Procurar
      </Button>
    </S.Wrapper>
  )
}

export default SearchBox
