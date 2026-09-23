import { catConfig } from '@/config/cat';
import Script from 'next/script';
import React from 'react';

export default function Cat() {
  if (!catConfig.enabled) {
    return null;
  }

  return <Script src="./cat/cat.js" data-cat="./cat/cat.gif" />;
}