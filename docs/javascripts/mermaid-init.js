window.mermaidConfig = {
  startOnLoad: true,
  securityLevel: 'loose',
};

if (window.mermaid) {
  window.mermaid.initialize(window.mermaidConfig);
}
