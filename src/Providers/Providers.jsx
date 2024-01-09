import { createContext, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

export const DataContext = createContext();
export const VisibleDataContext = createContext();
export const ActivePointContext = createContext();
export const ClickPoint = createContext();

export function Providers({ children }) {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [activePoint, setActivePoint] = useState(null);
  const [clickPoint, setClickPoint] = useState({ lat: null, lng: null });

  const setDataValue = value => {
    setData(value);
  };
  const setVisibleDataValue = value => {
    setVisibleData(value);
  };
  const setActivePointValue = value => {
    setActivePoint(value);
  };
  const setClickPointValue = (lat, lng) => {
    setClickPoint({ lat, lng });
  };

  return (
    <ChakraProvider>
      <DataContext.Provider value={{ data, setDataValue }}>
        <VisibleDataContext.Provider
          value={{ visibleData, setVisibleDataValue }}
        >
          <ActivePointContext.Provider
            value={{ activePoint, setActivePointValue }}
          >
            <ClickPoint.Provider value={{ clickPoint, setClickPointValue }}>
              {children}
            </ClickPoint.Provider>
          </ActivePointContext.Provider>
        </VisibleDataContext.Provider>
      </DataContext.Provider>
    </ChakraProvider>
  );
}
