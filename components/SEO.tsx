import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: Record<string, any>; // JSON-LD Structured Data
}

const SEO: React.FC<SeoProps> = ({ title, description, keywords, schema }) => {
  useEffect(() => {
    // 1. Установка заголовка
    document.title = title;

    // 2. Установка Meta Description
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Установка Keywords (для Яндекса еще иногда актуально)
    if (keywords) {
      let metaKeywords = document.querySelector("meta[name='keywords']");
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // 4. Внедрение Schema.org (JSON-LD)
    if (schema) {
      // Удаляем старую схему, если есть
      const oldScript = document.getElementById('schema-json-ld');
      if (oldScript) oldScript.remove();

      const script = document.createElement('script');
      script.id = 'schema-json-ld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    // Очистка при размонтировании (опционально, но полезно для SPA)
    return () => {
      const script = document.getElementById('schema-json-ld');
      if (script) script.remove();
    };
  }, [title, description, keywords, schema]);

  return null;
};

export default SEO;