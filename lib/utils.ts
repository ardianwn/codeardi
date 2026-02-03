/**
 * Format phone number to WhatsApp link format
 * @param phone - Phone number (e.g., '6281234567890')
 * @returns Formatted WhatsApp URL
 */
export const getWhatsAppUrl = (phone: string, message: string): string => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

/**
 * Format price to Indonesian Rupiah format
 * @param price - Price string
 * @returns Formatted price
 */
export const formatPrice = (price: string): string => {
  if (price === 'Custom') return price
  return `Rp ${price}`
}

/**
 * Smooth scroll to element
 * @param elementId - ID of the element to scroll to
 */
export const smoothScrollTo = (elementId: string): void => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
