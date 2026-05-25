CoordMode, Mouse, Screen

^+u::
texto := Clipboard

; FORÇA TEXTO PURO
Clipboard := Clipboard
ClipWait, 1

; MOSTRA O TEXTO COPIADO
MsgBox, , Texto Copiado:, %texto%

; =========================
; SEPARA OS VALORES
; =========================

RegExMatch(texto, "\*?Volume:\*?\s*(.*)", vVolume)
RegExMatch(texto, "\*?Cor:\*?\s*(.*)", vCor)
RegExMatch(texto, "\*?Aspecto:\*?\s*(.*)", vAspecto)
RegExMatch(texto, "\*?Urobilinogênio:\*?\s*(.*)", vUro)
RegExMatch(texto, "\*?Glicose:\*?\s*(.*)", vGli)
RegExMatch(texto, "\*?C. Cetônicos:\*?\s*(.*)", vCetona)
RegExMatch(texto, "\*?Bilirrubina:\*?\s*(.*)", vBili)
RegExMatch(texto, "\*?Proteína:\*?\s*(.*)", vProteina)
RegExMatch(texto, "\*?Nitrito:\*?\s*(.*)", vNitrito)
RegExMatch(texto, "\*?pH:\*?\s*(.*)", vpH)
RegExMatch(texto, "\*?Sangue/Hemoglobina:\*?\s*(.*)", vHemoglobina)
RegExMatch(texto, "\*?Densidade:\*?\s*(.*)", vDensidade)
RegExMatch(texto, "\*?Leucócitos:\*?\s*(.*)", vLeucocitos)
RegExMatch(texto, "\*?Hemácias:\*?\s*(.*)", vHemacias)
RegExMatch(texto, "\*?Cilindros:\*?\s*(.*)", vCilindros)
RegExMatch(texto, "\*?Células Epiteliais:\*?\s*(.*)", vCelulas)
RegExMatch(texto, "\*?Piócitos:\*?\s*(.*)", vPiocitos)
RegExMatch(texto, "\*?Flora Bacteriana:\*?\s*(.*)", vFlora)
RegExMatch(texto, "\*?Cristais:\*?\s*(.*)", vCristais)
RegExMatch(texto, "\*?Granulações:\*?\s*(.*)", vGranulacoes)

; =========================
; LIMPA CAMPOS
; =========================

vVolume1      := Limpar(vVolume1)
vCor1         := Limpar(vCor1)
vAspecto1     := Limpar(vAspecto1)
vUro1         := Limpar(vUro1)
vGli1         := Limpar(vGli1)
vCetona1      := Limpar(vCetona1)
vBili1        := Limpar(vBili1)
vProteina1    := Limpar(vProteina1)
vNitrito1     := Limpar(vNitrito1)
vpH1          := Limpar(vpH1)
vHemoglobina1 := Limpar(vHemoglobina1)
vDensidade1   := Limpar(vDensidade1)
vLeucocitos1  := Limpar(vLeucocitos1)
vHemacias1    := Limpar(vHemacias1)
vCilindros1   := Limpar(vCilindros1)
vCelulas1     := Limpar(vCelulas1)
vPiocitos1    := Limpar(vPiocitos1)
vFlora1       := Limpar(vFlora1)
vCristais1    := Limpar(vCristais1)
vGranulacoes1 := Limpar(vGranulacoes1)

; REMOVE "ml"
vVolume1 := StrReplace(vVolume1, "ml", "")
vVolume1 := StrReplace(vVolume1, "ML", "")

; =========================
; MONTA OBSERVAÇÕES
; =========================

msgObs := ""

Loop, 10
{
    RegExMatch(texto, A_Index "-Obs\.\:\s*(.*)", obsTemp)

    obs := Limpar(obsTemp1)

    if (obs != "")
    {
        msgObs .= "|Obs " A_Index ": " obs "`n"
    }
}

; =========================
; MSGBOX
; =========================

msg =
(
|-----------------------|
|CARACTERÍSTICAS GERAIS |
|-----------------------|
|Volume: %vVolume1%
|Cor: %vCor1%
|Aspecto: %vAspecto1%
|-----------------------|
|ELEMENTOS ANORMAIS     |
|-----------------------|
|Urobilinogênio: %vUro1%
|Glicose: %vGli1%
|C. Cetônicos: %vCetona1%
|Bilirrubina: %vBili1%
|Proteína: %vProteina1%
|Nitrito: %vNitrito1%
|pH: %vpH1%
|Hemoglobina: %vHemoglobina1%
|Densidade: %vDensidade1%
|Leucócitos: %vLeucocitos1%
|-----------------------|
|SEDIMENTOSCOPIA        |
|-----------------------|
|Hemácias: %vHemacias1%
|Cilindros: %vCilindros1%
|Células Epiteliais: %vCelulas1%
|Piócitos: %vPiocitos1%
|Flora Bacteriana: %vFlora1%
|Cristais: %vCristais1%
|Granulações: %vGranulacoes1%
)

if (msgObs != "")
{
    msg .= "`n|-----------------------|"
    msg .= "`n|OBSERVAÇÕES            |"
    msg .= "`n|-----------------------|"
    msg .= "`n" msgObs
    msg .= "|-----------------------|"
}

MsgBox, , Textos Separados:, %msg%

; =========================
; COLA VOLUME
; =========================

Clipboard := vVolume1
ClipWait
Send, ^v

Sleep, 100

Send, {Tab}

Sleep, 100

; =========================
; COLA ASPECTO
; =========================

Clipboard := vAspecto1
ClipWait
Send, ^v

Sleep, 100

Send, {Tab}

Sleep, 100

; =========================
; COLA OBSERVAÇÕES
; =========================

primeiraObs := true

Loop, 10
{
    RegExMatch(texto, A_Index "-Obs\.\:\s*(.*)", obsTemp)

    obs := Limpar(obsTemp1)

    if (obs != "")
    {
        ; TAB SOMENTE APÓS A PRIMEIRA
        if (!primeiraObs)
        {
            Send, {Tab}
            Sleep, 100
        }

        Clipboard := obs
        ClipWait
        Send, ^v

        Sleep, 100

        primeiraObs := false
    }
}

return

; =========================
; FUNÇÃO LIMPAR
; =========================

Limpar(txt)
{
    ; REMOVE QUEBRAS DE LINHA
    txt := RegExReplace(txt, "`r|`n")

    ; REMOVE ASTERISCOS
    txt := StrReplace(txt, "*", "")

    ; REMOVE PONTOS
    txt := StrReplace(txt, ".", "")

    ; REMOVE ESPAÇOS DUPLOS
    txt := RegExReplace(txt, "\s+", " ")

    ; REMOVE ESPAÇOS NAS PONTAS
    txt := Trim(txt)

    return txt
}