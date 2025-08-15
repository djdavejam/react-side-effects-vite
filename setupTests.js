import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import 'whatwg-fetch'; // fixes fetch issues in CodeGrade
import { Blob } from 'node-buffer'; // Required for Node in CodeGrade

afterEach(() => {
  cleanup();
});