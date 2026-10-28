import { Activity, MessagesSquare, Workflow, Compass, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionLabel } from '@/components/portfolio'

const projects = [
  {
    title: 'Electricity Load Forecasting',
    context: 'MSc Dissertation',
    category: 'MACHINE LEARNING',
    description: 'A machine-learning framework that forecasts UK electricity demand across the COVID structural break, comparing Prophet, XGBoost and a CNN-LSTM.',
    tags: ['Time-Series Forecasting', 'Python', 'Deep Learning'],
    icon: Activity,
  },
  {
    title: 'NLP Text Classifier',
    context: 'Natural Language Processing',
    category: 'NATURAL LANGUAGE PROCESSING',
    description: 'A fine-tuned DistilBERT against a Linear SVM, reaching a macro-F1 of 0.79.',
    tags: ['NLP', 'DistilBERT', 'scikit-learn'],
    icon: MessagesSquare,
  },
  {
    title: 'Roll-Forming Line Diagnosis',
    context: 'Industrias Metálicas RIGSA',
    category: 'PROCESS OPTIMISATION',
    description: 'Process mapping with SIPOC and VSM. Two of our proposals were selected for implementation, and the project was named the most outstanding of 16 in the course.',
    tags: ['Process Mapping', 'SIPOC', 'VSM'],
    icon: Workflow,
    distinction: 'Most outstanding project · 1 of 16',
  },
  {
    title: 'Fibreglass Conduit Market Entry',
    context: 'Hunter Composites',
    category: 'BUSINESS STRATEGY',
    description: 'Technology surveillance and a blue ocean business case.',
    tags: ['Technology Surveillance', 'Blue Ocean Strategy'],
    icon: Compass,
  },
]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="projects-section">
      <div className="page-width">
        <SectionLabel number="02">SELECTED PROJECTS</SectionLabel>
        <div className="projects-heading"><h2 id="projects-title">From analysis to impact.</h2><p>Research, real-world problems, measurable outcomes.</p></div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={project.title} aria-labelledby={`project-${index}`}>
              <Card className="h-full">
                <CardHeader>
                  <div className="project-topline"><span className="project-icon"><project.icon className="size-5" strokeWidth={1.5} aria-hidden="true" /></span><span className="project-number">0{index + 1}</span></div>
                  <p className="project-category">{project.category}</p>
                  <CardTitle><h3 id={`project-${index}`}>{project.title}</h3></CardTitle>
                  <CardDescription>{project.context}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="project-description">{project.description}</p>
                  {project.distinction && <p className="project-distinction"><Award className="size-4" aria-hidden="true" />{project.distinction}</p>}
                  <ul className="project-tags" aria-label="Project skills">{project.tags.map(tag => <li key={tag}><Badge variant="secondary">{tag}</Badge></li>)}</ul>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
