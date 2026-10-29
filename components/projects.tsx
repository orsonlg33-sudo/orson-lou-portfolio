import { SectionLabel } from '@/components/portfolio'

const projects = [
  {
    year: '2026',
    title: 'Electricity Load Forecasting',
    context: 'MSc dissertation, University of Hull.',
    description: 'I forecast UK half-hourly national demand from 2014 to 2022 with four models trained only on pre-COVID data: persistence, Prophet, XGBoost and a CNN-LSTM. At lockdown, day-ahead error (MASE) rose from 0.68 to 0.92, and only online rolling adaptation of the CNN-LSTM brought it back down to 0.70. I confirmed the findings on Indian national demand data.',
    tools: 'Tools: Python, XGBoost, Prophet, PyTorch, SHAP.',
  },
  {
    year: '2026',
    title: 'NLP Text Classifier',
    context: 'University of Hull.',
    description: 'I fine-tuned DistilBERT and benchmarked it against a Linear SVM baseline, reaching a macro-F1 of 0.79, about 12 percentage points higher. I also automated the evaluation reporting so the results can be reproduced.',
    tools: 'Tools: Python, Hugging Face Transformers, scikit-learn.',
  },
  {
    year: '2024',
    title: 'Roll-Forming Line Diagnosis',
    context: 'Industrias Metálicas RIGSA.',
    description: "With a team of five, I mapped a rack manufacturer's roll-forming and cutting line and found a welding bottleneck, unused capacity, long changeovers and scrap. We narrowed 15 ideas to five proposals, and the client chose two to implement: laser-displacement sensors with andon fault alerts, and automated setup of the die press and roll former. The course's director recognised it as the most outstanding of 16 projects.",
    tools: 'Methods: SIPOC, Value Stream Mapping, Nominal Group Technique.',
  },
  {
    year: '2024',
    title: 'Fibreglass Conduit Market Entry',
    context: 'Hunter Composites.',
    description: "For Mexico's leading fibreglass manufacturer, I screened five candidate products and recommended fibreglass conduits. The business case set them against PVC substitutes, backed by market sizing, standards analysis, a four-perspective KPI framework and an agile roadmap.",
    tools: 'Methods: technology surveillance, Buyer Utility Map, ERRC grid.',
  },
]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="projects-section">
      <div className="page-width">
        <SectionLabel number="02">PROJECTS</SectionLabel>
        <h2 id="projects-title" className="projects-heading">Selected work</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <article key={project.title} aria-labelledby={`project-${index}`} className="project-row">
              <time className="project-year" dateTime={project.year}>{project.year}</time>
              <header className="project-identity">
                <h3 id={`project-${index}`}>{project.title}</h3>
                <p className="project-context">{project.context}</p>
              </header>
              <div className="project-copy">
                <p className="project-description">{project.description}</p>
                <p className="project-tools">{project.tools}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
