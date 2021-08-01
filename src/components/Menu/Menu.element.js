import styled from "styled-components";

export const MenuWrapper = styled.div`
  width: 100%;
  padding: 45px 0;
`;

export const Categories = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 0 0.5rem 0;
`;

export const CategoryItem = styled.button`
  margin: 0 10px;
  font-weight: 300;
  outline: none;
  border: none;
  border-bottom: 1px solid transparent;

  &:focus {
    border-bottom: 1px solid white;
    transition: 0.4s ease;
  }
`;

export const MenuItems = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled.li`
  width: 100%;
  margin: 0.5rem 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const MenuPrice = styled.span`
  font-size: 15px;
  font-weight: 700;
  width: 48px;
  height: 48px;
  text-align: center;
  line-height: 48px;
`;
