const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Placeholder for API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Mock data for projects (based on reconnaissance)
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 4,
      title: 'MonAtelier',
      description: 'AI creative engine for bespoke art generation using Stable Diffusion 3.5. Optimized for local execution with sophisticated memory management.',
      technologies: ['Python', 'PyTorch', 'Hugging Face', 'Stable Diffusion', 'ComfyUI'],
      link: 'https://github.com/alex-eisenach/mon-atelier'
    },
    {
      id: 1,
      title: 'Bondi League',
      description: 'A full-stack golf league score-tracking application featuring complex data visualization and real-time updates.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'D3.js', 'Observable Plot'],
      link: 'https://github.com/alex-eisenach/bondi-league-frontend'
    },
    {
      id: 2,
      title: 'Domovoi',
      description: 'Home network automation "Butler" system using Shell scripting and Argo CD for infrastructure management.',
      technologies: ['Shell', 'Argo CD', 'Linux', 'Automation'],
      link: 'https://github.com/alex-eisenach/domovoi'
    },
    {
      id: 3,
      title: 'HCI Graffiti',
      description: 'Java-based project developed for Human-Computer Interaction studies, focusing on intuitive user interfaces.',
      technologies: ['Java', 'Swing', 'HCI Principles'],
      link: 'https://github.com/alex-eisenach/hci-graffiti'
    }
  ]);
});

// Mock data for certifications
app.get('/api/certifications', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'NVIDIA-Certified Professional: Accelerated Data Science',
      issuer: 'NVIDIA',
      date: '2025',
      image: '/certifications/prof_ads.png',
      description: 'Awarded for proficiency in accelerating data science workflows using NVIDIA GPUs.'
    },
    {
      id: 2,
      name: 'NVIDIA-Certified Professional: Generative AI LLMs',
      issuer: 'NVIDIA',
      date: '2025',
      image: '/certifications/prof_genai.png',
      description: 'Awarded for demonstrated professional-level ability to monitor, troubleshoot, and optimize AI infrastructure by NVIDIA. '
    },
    {
      id: 3,
      name: 'NVIDIA-Certified Associate: Generative AI LLMs',
      issuer: 'NVIDIA',
      date: '2025',
      image: '/certifications/assoc_genai.png',
      description: 'Awarded for demonstrated foundational concepts for developing, integrating, and maintaining AI-driven applications using generative AI and large language models (LLMs) with NVIDIA solutions.'
    },
  ]);
});

// Mock data for professional experience
app.get('/api/experience', (req, res) => {
  res.json([
    {
      id: 1,
      role: 'Staff Software Engineer',
      company: 'Seagate Technology',
      location: 'Longmont, CO',
      period: 'May 2014 - September 2025',
      leadership: [
        'Ownership role of the factory Multi-Disc Writer metrology subsystem which processes volumes of over 1M+ discs per day over 800+ systems',
        'Software Tech Council representative'
      ],
      responsibilities: [
        'Designed novel embedded algorithms in C++ and Python for servo control, DSP, and embedded measurement to enable bleeding-edge products',
        'Deployed new processes and data acquisition schemes to improve mass production, both embedded and externally in web applications',
        'Created fullstack data systems tooling to characterize production performance, change impact, and process control',
        'Wrote device drivers for 3rd party equipment and created low-level interfaces and configuration of embedded FPGA and ASIC hardware',
        'Planned, communicated, and orchestrated the testing, qualification and deployment of new software releases to mass production'
      ],
      projects: [
        'Sole design and delivery of a next-gen large-scale distributed manufacturing execution system to facilitate automation/production monitoring',
        'Co-led and deployed a five-year ground-up refactoring of legacy process code into modern Python/C++ OOP architecture with full DevOps integration',
        'Developed a convolutional neural network to classify measured disk flaw signatures in 2-D image data using Keras+TensorFlow in Python',
        'Design and overseas vendor deployment of functional test equipment to support internal hardware projects, such as temperature control systems and PCB testers'
      ]
    }
  ]);
});

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*path', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
