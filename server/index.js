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
      description: 'Local engine for uniquely-styled art generation for my wife\'s color book business. Optimized to run on consumer hardware and customized with LoRA training.',
      technologies: ['PyTorch', 'HuggingFace', 'Stable Diffusion', 'TensorRT', 'ComfyUI'],
      link: 'https://github.com/alex-eisenach/mon-atelier'
    },
    {
      id: 1,
      title: 'Bondi League',
      description: 'A full-stack golf league score-tracking application featuring bespoke data visualization and real-time updates.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'D3.js', 'Observable Plot'],
      link: 'https://github.com/alex-eisenach/bondi-league-frontend'
    },
    {
      id: 2,
      title: 'Domovoi',
      description: 'Home network ad-blocker and VPN server built on Pi-Hole & WireGuard. CI through Argo CD + K3s. Metrology through Prometheus + Grafana.',
      technologies: ['Pi-Hole', 'WireGuard', 'Argo CD', 'K3s', 'Prometheus', 'Grafana'],
      link: 'https://github.com/alex-eisenach/domovoi'
    },
    {
      id: 3,
      title: 'HCI Graffiti',
      description: 'Android Java app for augmented reality graffiti creation and geo-tagging.',
      technologies: ['Java', 'Android', 'OpenCV', 'Augmented Reality'],
      link: 'https://github.com/alex-eisenach/hci-graffiti'
    }
  ]);
});

// Mock data for certifications
app.get('/api/certifications', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Certified Professional: Agentic AI',
      issuer: 'NVIDIA',
      date: '2025',
      image: '/certifications/prof_aai.png',
      description: 'Awarded for demonstrated professional-level competency indesigning, building, evaluating, and operating agentic systems.'
    },
    {
      id: 2,
      name: 'Certified Professional & Associate: Generative AI LLMs',
      issuer: 'NVIDIA',
      date: '2025',
      image: '/certifications/prof_genai.png',
      description: 'Awarded for demonstrated professional-level ability to monitor, troubleshoot, and optimize AI infrastructure by NVIDIA. '
    },
    {
      id: 3,
      name: 'Certified Professional: Accelerated Data Science',
      issuer: 'NVIDIA',
      date: '2025',
      image: '/certifications/prof_ads.png',
      description: 'Awarded for proficiency in accelerating data science workflows using NVIDIA GPUs.'
    }
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
        'Deployed new processes and data acquisition schemes to meet mass production requirements for new drive technologies',
        'Created fullstack data systems tooling to characterize production performance, change impact, and process control',
        'Wrote device drivers for 3rd party equipment and created low-level interfaces and configuration of embedded FPGA and ASIC hardware',
        'Planned, communicated, and orchestrated the testing, qualification and deployment of new software releases to mass production'
      ],
      projects: [
        'Sole design and delivery of a next-gen large-scale distributed manufacturing execution system to facilitate automation/production monitoring',
        'Vectorized core embedded pattern quality algorithms to achieve over 70% reduction in processing time, boosting overall throughput by an average of ~20%',
        'Developed and mass-production-qualified novel HAMR laser monitoring/control system, achieving over 10x material endurance gains as a key technology roadmap enabler',
        'Co-led and delivered a five-year ground-up refactoring of legacy process code into modern Python/C++ OOP architecture with full DevOps integration',
        'Developed a convolutional neural network to classify measured disk flaw signatures in 2-D image data using Keras+TensorFlow in Python',
        'Led implementation of StarCoder-based internal coding assistant using TabbyML framework as VSCode extension; demonstrated to Tech Council',
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
