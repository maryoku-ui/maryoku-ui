/** @jsxImportSource react */
import type { FC, ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

type ChakraProviderWithSlotProps = {
  defaultSlot?: ReactNode;
};

const ChakraProviderWithSlot: FC<ChakraProviderWithSlotProps> = ({ defaultSlot }) => {
  return <ChakraProvider>{defaultSlot}</ChakraProvider>;
};

export default ChakraProviderWithSlot;
