import styled from "styled-components";
import tw from "twin.macro";


export const DivModal = styled.div`
    ${tw`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 md:h-full justify-center items-center flex bg-gray-400/[.47]`};
`;

export const ButtonCerrar = styled.button`
    ${tw`absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white`};
`;

export const H3 = styled.h3`
    ${tw`mb-4 text-xl font-medium text-gray-900 dark:text-white`};
`;

export const ButtonAceptar = styled.button`
    ${tw`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`};
`;
