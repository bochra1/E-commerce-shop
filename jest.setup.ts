// jest.setup.ts
import '@testing-library/jest-dom';  // Cette ligne ajoute les matchers personnalisés de jest-dom
// jest.setup.js ou jest.setup.ts
// jest.setup.ts
import { TextEncoder, TextDecoder } from 'util';

// Polyfill TextEncoder and TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;
class IntersectionObserverMock {
  observe() {}
  disconnect() {}
  unobserve() {}
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});
