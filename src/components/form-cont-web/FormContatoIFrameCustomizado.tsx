interface FormContatoProps {
  sitefilho?: string
}

export default function FormContatoIFrameCustomizado({ sitefilho = 'form-cont-web' }: FormContatoProps) {
  const entryId = '1234567890' // ← substitua pelo ID real do campo “Qual site está enviando?”
  const formURL = `https://docs.google.com/forms/d/e/1FAIpQLSdEtqTMKOc4_4bnWIAsDKjKdoOLhpCxHuDc0y-4ZIR3ZZ6xpA/viewform?embedded=true&entry.${entryId}=${encodeURIComponent(sitefilho)}`

  return (
    <div style={{ position: 'relative', width: '100%', paddingTop: '150%' }}>
      <iframe
        src={formURL}
        title={`Formulário de Contato - ${sitefilho}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          backgroundColor: 'transparent',
        }}
        loading="lazy"
        allowFullScreen
      >
        Carregando…
      </iframe>
    </div>
  )
}
