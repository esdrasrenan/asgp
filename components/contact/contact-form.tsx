'use client'

import * as React from 'react'
import { useFormStatus } from 'react-dom'

import { sendContactAction } from '@/app/actions/send-contact'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const initialState: ContactFormState = {
  status: 'idle',
  message: '',
}

function SubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus()

  return (
    <Button className="w-full h-12 rounded-lg" type="submit" disabled={pending || disabled}>
      {pending ? 'Enviando…' : 'Enviar mensagem'}
    </Button>
  )
}

export function ContactForm() {
  const [state, formAction] = React.useActionState(sendContactAction, initialState)
  const [consent, setConsent] = React.useState(false)
  const formRef = React.useRef<HTMLFormElement>(null)

  React.useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
      setConsent(false)
    }
  }, [state.status])

  return (
    <form ref={formRef} action={formAction} className="mt-6 space-y-4" noValidate>
      <div>
        <label className="sr-only" htmlFor="nome">
          Nome
        </label>
        <Input id="nome" name="nome" type="text" placeholder="Nome" minLength={3} maxLength={120} required />
      </div>
      <div>
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <Input id="email" name="email" type="email" placeholder="Email" maxLength={160} required />
      </div>
      <div>
        <label className="sr-only" htmlFor="assunto">
          Assunto
        </label>
        <Input id="assunto" name="assunto" type="text" placeholder="Assunto" maxLength={160} />
      </div>
      <div>
        <label className="sr-only" htmlFor="mensagem">
          Mensagem
        </label>
        <Textarea
          id="mensagem"
          name="mensagem"
          placeholder="Mensagem"
          rows={4}
          maxLength={500}
          className="resize-none"
          required
        />
        <p className="mt-1 text-xs text-foreground/60">Máximo 500 caracteres</p>
      </div>
      <div className="flex items-start gap-3 text-sm text-foreground/70">
        <Checkbox
          id="consent"
          checked={consent}
          onCheckedChange={(checked) => setConsent(checked === true)}
          className="mt-1"
          aria-required
        />
        <label htmlFor="consent" className="leading-6">
          Autorizo o uso dos meus dados para contato.
        </label>
        <input type="hidden" name="consent" value={String(consent)} />
      </div>
      <div className="pt-2">
        <SubmitButton disabled={!consent} />
      </div>
      {state.status !== 'idle' ? (
        <div
          className={`text-sm text-center ${state.status === 'success' ? 'text-emerald-600' : 'text-destructive'}`}
          role="status"
          aria-live="polite"
        >
          {state.message}
        </div>
      ) : null}
    </form>
  )
}
