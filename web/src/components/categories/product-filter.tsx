import { BodyCopyRegularSmall, LabelSmall } from '../../config/global-styled-components';
import React, { useState } from 'react';

import Chevron from '../shared/chevron';
import { Order } from '../../model/filters/order';
import { Tags } from '../../model/filters/tags';
import { colors } from '../../config/global-styles';
import { device } from '../../config/device';
import styled from 'styled-components';

const FilterContainer = styled.section`
  display: block;

  @media ${device.large} {
    display: none;
  }
`;

const ListContainer = styled.article``;

const HeaderContainer = styled.article`
  display: flex;
`;

const Dropdown = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem 1rem 2rem;
  ${(props: { isOpen: boolean }) =>
    props.isOpen ? `background-color:${colors.ui.grey10percent};` : `background-color:${colors.ui.grey5percent};`}
`;

const DropdownListItem = styled(BodyCopyRegularSmall)`
  padding: 1rem 2rem 1rem 2rem;
  background-color: ${colors.ui.grey10percent};

  &:hover {
    background-color: ${colors.ui.grey25percent};
  }
`;

const FilterTitle = styled(LabelSmall)`
  ${(props: { isOpen: boolean; isSelected: boolean }) => (props.isOpen ? 'font-weight:bold;' : '')}
  ${(props: { isOpen: boolean; isSelected: boolean }) => (props.isSelected ? 'font-weight:bold;' : '')}
`;

const DropdownList = styled.ul<{ shouldDisplayDropdown: boolean }>`
  list-style-type: none;
  text-align: center;

  transition: all ease-out 200ms;
  visibility: ${(props) => (props.shouldDisplayDropdown ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.shouldDisplayDropdown ? 1 : 0)};
  ${(props) => (props.shouldDisplayDropdown ? '' : 'height:0')};
`;

const ProductFilter = ({
  filterProducts,
  orderProducts,
}: {
  filterProducts: (tag: Tags) => void;
  orderProducts: (tag: Order) => void;
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isFilterSelected, setIsFilterSelected] = useState(false);
  const [isOrderSelected, setIsOrderSelected] = useState(false);
  const [filterTitle, setFilterTitle] = useState('Filtrar');
  const [orderTitle, setOrderTitle] = useState('Ordenar por');

  const filterAndClose = (tag: Tags) => {
    filterProducts(tag);
    setIsFilterSelected(true);
    if (tag !== Tags.All) setFilterTitle(tag);
    else setFilterTitle('Todos');
    setIsFiltersOpen(false);
  };

  const orderAndClose = (order: Order) => {
    orderProducts(order);
    setIsOrderSelected(true);
    setOrderTitle(order);
    setIsOrderOpen(false);
  };

  return (
    <FilterContainer>
      <HeaderContainer>
        <Dropdown
          isOpen={isFiltersOpen}
          onClick={() => {
            setIsFiltersOpen(!isFiltersOpen);
            if (!isFiltersOpen && isOrderOpen) setIsOrderOpen(false);
          }}
        >
          <FilterTitle isSelected={isFilterSelected} isOpen={isFiltersOpen}>
            {filterTitle}
          </FilterTitle>
          <Chevron isOpen={isFiltersOpen} />
        </Dropdown>
        <Dropdown
          isOpen={isOrderOpen}
          onClick={() => {
            setIsOrderOpen(!isOrderOpen);
            if (!isOrderOpen && isFiltersOpen) setIsFiltersOpen(false);
          }}
        >
          <FilterTitle isSelected={isOrderSelected} isOpen={isOrderOpen}>
            {orderTitle}
          </FilterTitle>
          <Chevron isOpen={isOrderOpen} />
        </Dropdown>
      </HeaderContainer>
      <ListContainer>
        <DropdownList shouldDisplayDropdown={isOrderOpen}>
          <DropdownListItem onClick={() => orderAndClose(Order.ASC)}>Precio ascendente</DropdownListItem>
          <DropdownListItem onClick={() => orderAndClose(Order.DESC)}>Precio descendente</DropdownListItem>
        </DropdownList>
        <DropdownList shouldDisplayDropdown={isFiltersOpen}>
          <DropdownListItem onClick={() => filterAndClose(Tags.Steel)}>Compra comunitaria</DropdownListItem>
          <DropdownListItem onClick={() => filterAndClose(Tags.Discount)}>Entrega Inmediata</DropdownListItem>
          <DropdownListItem onClick={() => filterAndClose(Tags.Favorite)}>Favoritos</DropdownListItem>
          <DropdownListItem onClick={() => filterAndClose(Tags.All)}>Todos</DropdownListItem>
        </DropdownList>
      </ListContainer>
    </FilterContainer>
  );
};

export default ProductFilter;
