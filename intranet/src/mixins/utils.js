export const Utils = () => {
  return {
    methods: {
      runFormatting: (run) => {
        if (run === undefined) return ''
        let runAux = run
        runAux = runAux.replace(/[^0-9kK]+/gi, '')
        runAux = runAux.toUpperCase()

        if (runAux.length > 9) {
          runAux = runAux.slice(0, 9)
        }

        if (!/\./.test(runAux)) {
          let formatedRun = ''
          let tur = runAux
            .split('')
            .reverse()
            .join('')

          for (var i = tur.length - 1; i >= 0; i--) {
            if ((i == 3 || i == 6) && tur[i] != '.') {
              formatedRun = tur[i] + '.' + formatedRun
            } else if (i === 0 && tur[i] != '-') {
              formatedRun = tur[i] + '-' + formatedRun
            } else {
              formatedRun = tur[i] + formatedRun
            }
          }
          return formatedRun
            .split('')
            .reverse()
            .join('')
        }
      },
      runClean: (run) => {
        return run
          .toString()
          .replace('-', '')
          .replace(/\./g, '')
          .replace(/\s+/g, '')
      },
      runValidation: (run) => {
        if (run === undefined) return false
        const runFormated = run.replace(/\./g, '')
        let Fn2 = {
          validaRut: function(rutCompleto) {
            if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompleto)) return false
            let tmp = rutCompleto.split('-')
            let digv = tmp[1]
            let rut = tmp[0]
            if (digv == 'K') digv = 'k'
            return Fn2.dv(rut) == digv
          },
          dv: function(T) {
            let M = 0,
              S = 1
            for (; T; T = Math.floor(T / 10))
              S = (S + (T % 10) * (9 - (M++ % 6))) % 11
            return S ? S - 1 : 'k'
          }
        }
        return Fn2.validaRut(runFormated)
      },
      // numberFormat: (input) => {
      //   if (input === undefined) return ''
      //   input = input.toString().replace(/[^0-9\,]/g, '')

      //   if (input !== '') {
      //     input = input.toString().replace(/[,]/, '.')
      //     input = parseFloat(input)
      //     let aux_array = input.toString().split('.')

      //     aux_array[0] = aux_array[0]
      //       .toString()
      //       .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      //     let output =
      //       typeof aux_array[1] == 'undefined'
      //         ? aux_array[0]
      //         : aux_array[0] + ',' + aux_array[1]
      //     output = output == '' ? 0 : output

      //     return output
      //   } else {
      //     return ''
      //   }
      // },
      numberClean: (input) => {
        input = input
          .toString()
          .split('.')
          .join('')
        input = input.toString().replace(/[,]/, '.')
        let output = parseFloat(input)
        output = output
          .toString()
          .split('.')
          .join(',')

        return output
      },
      formatCodigo(codigo) {
        let code = codigo.toString()
        while (code.length < 6) code = '0' + code
        return code
      }
    }
  }
}
