import styled from "styled-components";
import tw from "twin.macro";


export const Nav = styled.nav`
    ${tw`relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-md`};
`;

export const DivUno = styled.div`
    ${tw`container-fluid w-full flex flex-wrap items-center justify-between px-6`};
`;

export const ButtonCerrar = styled.button`
    ${tw`text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline`};
`;

export const Li = styled.li`
    ${tw`p-2`};
`;

export const A = styled.a`
    ${tw`text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0`};
`;

export const AAcount = styled.a`
    ${tw`text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100`};
`;

export const AProfile = styled.a`
    ${tw`text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100`};
`;


