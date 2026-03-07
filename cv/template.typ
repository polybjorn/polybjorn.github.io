// CV Template — Polybjorn
// Usage: typst compile cv/template.typ cv/output/cv-en.pdf --input lang=en --root .
//        typst compile cv/template.typ cv/output/cv-no.pdf --input lang=no --root .

// --- Configuration ---

#let lang = sys.inputs.at("lang", default: "en")
#let data = yaml("../src/data/cv.yaml")

// Section labels per language
#let labels = (
  en: (
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    software: "Software & Tools",
  ),
  no: (
    experience: "Erfaring",
    education: "Utdanning",
    skills: "Ferdigheter",
    software: "Programvare og verktøy",
  ),
)

#let label = labels.at(lang)

// --- Brand colors (print palette) ---

#let color-body = rgb("#111111")
#let color-secondary = rgb("#222222")
#let color-heading = rgb("#555555")
#let color-accent = rgb("#6AAEEE")
#let color-muted = rgb("#8A8F99")
#let color-border = rgb("#CCCCCC")

// --- Page setup (brand guide CV specs) ---

#set page(
  paper: "a4",
  margin: (top: 15mm, bottom: 15mm, left: 20mm, right: 20mm),
)

#set text(
  size: 9pt,
  fill: color-body,
)

#set par(
  leading: 0.65em,
  justify: true,
)

// --- Heading styles ---

#show heading.where(level: 1): it => {
  set text(size: 24pt, weight: "bold", fill: color-body)
  block(above: 0pt, below: 4pt, it.body)
}

#show heading.where(level: 2): it => {
  set text(size: 10pt, weight: "bold", fill: color-heading, tracking: 0.08em)
  block(above: 16pt, below: 8pt, upper(it.body))
}

// --- Helper functions ---

#let entry(title: "", org: "", period: "", desc: none) = {
  block(above: 8pt, below: 4pt, {
    grid(
      columns: (1fr, auto),
      gutter: 8pt,
      {
        text(weight: "bold", size: 9.5pt, title)
        if org != "" {
          text(fill: color-secondary)[ — #org]
        }
      },
      align(right, text(size: 8pt, fill: color-muted, period)),
    )
    if desc != none {
      v(2pt)
      text(fill: color-secondary, desc)
    }
  })
}

#let skill-tag(content) = {
  box(
    inset: (x: 6pt, y: 3pt),
    radius: 3pt,
    stroke: 0.5pt + color-border,
    text(size: 8pt, content),
  )
}

#let software-category(name, tools) = {
  block(above: 6pt, below: 2pt, {
    text(weight: "bold", size: 8.5pt, fill: color-heading, name)
    h(6pt)
    text(size: 8pt, fill: color-secondary, tools.join("  ·  "))
  })
}

// --- Document ---

= Bjørn A. Andersen

// --- Experience ---

== #label.experience

#for item in data.experience {
  let loc = item.at(lang)
  entry(
    title: loc.title,
    org: loc.org,
    period: item.period,
    desc: loc.at("desc", default: none),
  )
}

// --- Education ---

== #label.education

#for item in data.education {
  let loc = item.at(lang)
  entry(
    title: loc.title,
    org: loc.org,
    period: item.period,
  )
}

// --- Skills ---

== #label.skills

#block(above: 4pt, {
  for (i, skill) in data.skills.at(lang).enumerate() {
    skill-tag(skill)
    h(4pt)
  }
})

// --- Software & Tools ---

== #label.software

#for (category, tools) in data.software.at(lang) {
  software-category(category, tools)
}
