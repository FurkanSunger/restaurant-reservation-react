import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkButton = styled(Link)`
    padding: 10px 16px;
    border-radius: 7px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
`;

export const NormalButton = styled.button`
    padding: 10px 16px;
    border-radius: 7px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    background-color: transparent; //propla gelecek
    color: white; //propla gelecek

    &:hover{
        background-color: white; //propla gelecek
        color: orange; //propla gelecek
    }
`;

export const SectionTitle = styled.h3`
    font-size: 42px;
`;

export const PrimaryText = styled.p`
    font-size: 15px;
    font-weight: 300;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px 7px;
    border-radius: 12px;
    border: 1px solid gray;
    outline: none;
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 10px 7px;
    border-radius: 12px;
    border: 1px solid gray;
    outline: none;
`;

export const AddressLabel = styled.address`
    font-size: 14px;
    font-weight: 300;
    margin: 0;
`;

export const PhoneLabel = styled.span`
    font-size: 14px;
    font-weight: 300;
`;

export const SocialMedia = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
`;

export const SocialMediaItem = styled.li`
    font-size: 18px;
    margin: 0 7px;
    list-style: none;
`;

export const SocialMediaLink = styled.a`
    text-decoration: none;

    &:hover{
        color: #E45826;
        transition: 0.4s ease;
    }
`;