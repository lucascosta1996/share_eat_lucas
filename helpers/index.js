export function normalizePathname( pathname ) {
  return pathname.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '').toLowerCase()
}

export function formatBRL( value ) {
  return "R$ " + value.toFixed( 2 ).replace( '.', ',' ).replace( /(\d)(?=(\d{3})+\,)/g, "$1." )
}

export function currencyTyping( i ) {
  let v = i.value.replace( /\D/g,'' )
	v = ( v/100 ).toFixed(2) + ''
	v = v.replace( ".", "," )
	v = v.replace( /(\d)(\d{3})(\d{3}),/g, "$1.$2.$3," )
	v = v.replace( /(\d)(\d{3}),/g, "$1.$2," )
	i.value = `R$ ${v}`
}