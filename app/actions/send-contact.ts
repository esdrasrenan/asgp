'use server'

import { Resend } from 'resend'

type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const requiredEnvVars = ['RESEND_API_KEY', 'RESEND_FROM', 'CONTACT_TO'] as const

function validateEnv(): string | null {
  for (const key of requiredEnvVars) {
    if (!process.env[key] || process.env[key]!.trim() === '') {
      return `Variável de ambiente ${key} não configurada.`
    }
  }
  return null
}

export async function sendContactAction(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validationError = validateEnv()

  if (validationError) {
    return {
      status: 'error',
      message: validationError,
    }
  }

  const name = formData.get('nome')?.toString().trim() ?? ''
  const email = formData.get('email')?.toString().trim() ?? ''
  const subject = formData.get('assunto')?.toString().trim() ?? ''
  const message = formData.get('mensagem')?.toString().trim() ?? ''
  const consent = formData.get('consent')?.toString() === 'true'

  if (!name || !email || !message) {
    return {
      status: 'error',
      message: 'Preencha nome, e-mail e mensagem para enviar o contato.',
    }
  }

  if (!consent) {
    return {
      status: 'error',
      message: 'Confirme o consentimento para uso dos dados antes de enviar.',
    }
  }

  const apiKey = process.env.RESEND_API_KEY!
  const from = process.env.RESEND_FROM!
  const to = process.env.CONTACT_TO!
  const replyTo = process.env.CONTACT_REPLY_TO?.trim() || email
  const subjectPrefix = process.env.CONTACT_SUBJECT_PREFIX?.trim() || '[Contato]'

  const recipients = to
    .split(',')
    .map((value) => value.trim())
    .filter((value) => value.length > 0)

  if (recipients.length === 0) {
    return {
      status: 'error',
      message: 'Nenhum destinatário configurado para receber o contato.',
    }
  }

  const resend = new Resend(apiKey)

  const mailSubject =
    subject && subjectPrefix ? `${subjectPrefix} ${subject}` : `${subjectPrefix} Novo contato`

  const html = `
    <h2>Novo contato recebido pelo site</h2>
    <p><strong>Nome:</strong> ${name}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    ${subject ? `<p><strong>Assunto:</strong> ${subject}</p>` : ''}
    <p><strong>Consentimento:</strong> ${consent ? 'Sim' : 'Não'}</p>
    <hr />
    <p><strong>Mensagem:</strong></p>
    <p>${message.replace(/\n/g, '<br />')}</p>
  `

  const textLines = [
    'Novo contato recebido pelo site',
    `Nome: ${name}`,
    `E-mail: ${email}`,
    subject ? `Assunto: ${subject}` : null,
    `Consentimento: ${consent ? 'Sim' : 'Não'}`,
    '',
    'Mensagem:',
    message,
  ].filter(Boolean) as string[]

  try {
    await resend.emails.send({
      from,
      to: recipients,
      replyTo,
      subject: mailSubject,
      html,
      text: textLines.join('\n'),
    })

    return {
      status: 'success',
      message: 'Mensagem enviada com sucesso! Em breve entraremos em contato.',
    }
  } catch (error) {
    console.error('Erro ao enviar contato', error)
    return {
      status: 'error',
      message:
        'Não foi possível enviar sua mensagem no momento. Tente novamente em instantes ou utilize outro canal.',
    }
  }
}
