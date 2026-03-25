import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache'
import type { LegalPage } from '../../../payload-types'

export const revalidateLegalPage: CollectionAfterChangeHook<LegalPage> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const slug = doc.slug as string
    const path = `/${slug}` // e.g. /impressum, /datenschutz, /agb

    payload.logger.info(`Revalidating legal page at path: ${path}`)
    revalidatePath(path)
  }

  return doc
}

export const revalidateDeleteLegalPage: CollectionAfterDeleteHook<LegalPage> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const slug = doc?.slug as string
    revalidatePath(`/${slug}`)
  }

  return doc
}
