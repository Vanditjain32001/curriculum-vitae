export interface Project {
  id: string;
  title: string;
  client?: string;
  tagline: string;
  type: string;
  role: string;
  statusBadge: string;
  description: string;
  longDescription: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  challenges: string[];
  architectureOverview: string;
  pipelineSteps?: string[];
  links: {
    website?: string;
    playStore?: string;
    appStore?: string;
    github?: string;
    isConfidential?: boolean;
  };
}

export interface SkillCertificate {
  title: string;
  issuer: string;
  url: string;
}

export interface Skill {
  name: string;
  highlight: string;
  iconId: string;
  badge?: string;
  category: string;
  projects?: string;
  certificates?: SkillCertificate[];
}

export interface SkillCategory {
  id: string;
  category: string;
  endpoint: string;
  tagline: string;
  iconName: string;
  skills: Skill[];
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  achievements: {
    title: string;
    desc: string;
  }[];
  techUsed: string[];
}

export const PERSONAL_INFO = {
  name: "Vandit Jain",
  role: "Strategic Backend Software Engineer",
  tagline: "Architecting high-throughput Go microservices, distributed pipelines, and pioneering AI-augmented engineering workflows.",
  location: "New Delhi, India",
  email: "vanditjain921@gmail.com",
  phone: "+91 9212613241",
  github: "https://github.com/Vanditjain32001",
  linkedin: "https://www.linkedin.com/in/vanditjain1/",
  resumePdf: "/Vandit_Jain_Resume.pdf",
  photo: "/vandit-suit-portrait.png",
  avatarPhoto: "/vandit-suit-portrait.png",
  stats: [
    { label: "Professional Experience", value: "3+ Years", detail: "Go & Distributed Systems" },
    { label: "Based In", value: "India", detail: "New Delhi" },
    { label: "Core Architecture", value: "Microservices", detail: "Kafka, gRPC, Redis, Postgres" },
    { label: "Engineering Edge", value: "AI-Augmented", detail: "High-Velocity SDLC" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "catena-clearing",
    title: "Catena Clearing",
    tagline: "High-Volume Telematics Integration & Normalization Platform",
    type: "Enterprise Telematics & Data Platform",
    role: "Technical Product Specialist",
    statusBadge: "Live Enterprise Platform",
    description:
      "Architected a scalable Go data pipeline normalizing high-volume telematics data from 300+ telematics service providers (TSPs) into unified real-time telemetry streams.",
    longDescription:
      "Catena Clearing connects disparate commercial fleet telematics systems into a standardized clearinghouse. Commercial telematics providers emit data in wildly differing formats, intervals, and payload structures. This platform normalizes high-velocity IoT streams into standardized JSON schemas with strict validation, enabling automated detention tracking, mileage auditing, and fleet intelligence at scale.",
    technologies: [
      "Golang",
      "Python",
      "Microservices",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "Snowflake",
      "JSON Schema Validation",
      "Docker",
      "AWS Lambda",
      "Claude / AI SDLC",
    ],
    metrics: [
      { label: "Providers Integrated", value: "300+" },
      { label: "Customer Requests & Bug Resolution", value: "High-Velocity Rollouts" },
      { label: "Schema Validation", value: "100% Strict" },
      { label: "Architecture", value: "Go Microservices" },
    ],
    challenges: [
      "Normalizing disparate, unpredictable telemetry packets across 300+ telematics providers without dropping throughput.",
      "Preventing ingestion lag during peak fleet operation hours when millions of GPS and engine status events arrive simultaneously.",
      "Rapidly prototyping and validating standardized JSON schemas using AI-assisted engineering tools to handle changing upstream vendor specs.",
    ],
    architectureOverview:
      "Raw TSP Webhooks & Socket Feeds → High-Concurrency Ingestion Workers (Go) → JSON Schema Validation Engine → Kafka Distributed Event Stream → Telematics Intelligence & Detention Service → PostgreSQL / Redis Cache → Client Dashboards & Webhook Dispatchers.",
    pipelineSteps: [
      "Raw Telemetry Ingestion (300+ TSPs)",
      "Worker Pool De-duplication & Sanitization",
      "Dynamic JSON Schema Normalizer",
      "Kafka Event Bus Partitioning",
      "Persistence to PostgreSQL & Hot Redis Caching",
      "Real-time Fleet Intelligence Dispatch",
    ],
    links: {
      website: "https://www.catenaclearing.io/",
      github: "https://github.com/Vanditjain32001",
    },
  },
  {
    id: "panasonic-emobility",
    title: "Panasonic E-Mobility",
    client: "Panasonic",
    tagline: "National Electric Vehicle (EV) Rental & Fleet Infrastructure Platform",
    type: "Clean Mobility & IoT Fleet Platform",
    role: "Backend Platform Engineer",
    statusBadge: "Enterprise Production Platform",
    description:
      "Architected the REST API backbone for a dual-application EV ecosystem (Rider ride-hailing & Driver onboarding) alongside an Operator Dashboard for fleet telemetry and battery health.",
    longDescription:
      "Built for Panasonic's national electric vehicle initiative, this mission-critical system powers the entire lifecycle of EV rentals and ride-hailing. The backend orchestrates driver verification, booking lifecycles, vehicle telematics tracking, battery health degradation monitoring, and maintenance inspection workflows for vehicle damage cost recovery.",
    technologies: [
      "Golang",
      "REST APIs",
      "Microservices",
      "PostgreSQL",
      "Redis",
      "AWS Lambda",
      "CloudWatch",
      "Grafana",
      "Spatial Indexing",
    ],
    metrics: [
      { label: "API Latency Reduction", value: "20%" },
      { label: "Dual Ecosystem", value: "Rider & Driver" },
      { label: "Telemetry Telemetry", value: "Live Battery Health" },
      { label: "Inspection Recovery", value: "Automated Workflows" },
    ],
    challenges: [
      "Coordinating state synchronization across rider ride-hailing requests and driver onboarding/acceptance flows in real-time.",
      "High database read/write contention on vehicle coordinates and availability status during high concurrency periods.",
      "Optimizing spatial distance calculation algorithms and database indexes to cut critical path API latency by 20%.",
    ],
    architectureOverview:
      "Dual Mobile Clients (Rider & Driver) → CloudFlare / AWS API Gateway → Go REST API Microservices → Spatial Distance Calculation Engine → Fleet Telemetry & Battery Health Worker → PostgreSQL (Partitioned Tables & GiST Spatial Indexes) + Redis Caching → Operator Web Dashboard.",
    pipelineSteps: [
      "Driver Onboarding & Identity Verification Flow",
      "Ride Dispatch & Geospatial Distance Calculation",
      "Continuous EV Battery & Telemetry Tracking",
      "End-of-Trip Vehicle Damage Inspection Workflow",
    ],
    links: {
      isConfidential: true,
      github: "https://github.com/Vanditjain32001",
    },
  },
  {
    id: "precium",
    title: "Precium",
    tagline: "Dynamic Pricing Engine & Revenue Optimization Tool",
    type: "SaaS & Dynamic Pricing Engine",
    role: "Technical Lead",
    statusBadge: "Live SaaS Product",
    description:
      "Led technical execution and architecture as primary technical point of contact, translating complex commercial pricing rules into a high-performance dynamic calculation engine.",
    longDescription:
      "Precium empowers enterprise businesses to dynamically compute and optimize pricing strategies based on market signals, demand fluctuations, and margin thresholds. As Technical Lead, steered sprint planning, resolved high-load calculation bottlenecks, and translated client enterprise requirements into scalable microservice roadmaps.",
    technologies: [
      "Golang",
      "Distributed Systems",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "Microservices",
      "Agile Architecture",
    ],
    metrics: [
      { label: "Role", value: "Technical Lead" },
      { label: "Delivery", value: "High-Velocity Sprints" },
      { label: "Optimization", value: "Dynamic Pricing Engine" },
      { label: "Stakeholders", value: "Direct Enterprise Clients" },
    ],
    challenges: [
      "Translating complex multi-variable economic pricing models into deterministic, low-latency computational services.",
      "Eliminating production calculation bottlenecks when recalculating millions of product SKUs under varying market conditions.",
      "Bridging business stakeholders and engineering teams with rigorous technical roadmaps.",
    ],
    architectureOverview:
      "Client Management Console → Go Pricing Core Microservice → Rule Execution Engine → Historical & Real-time Market Data Store (PostgreSQL) → Fast Redis Cache Layer → Dynamic Pricing Recommendation API.",
    pipelineSteps: [
      "Market & SKU Rule Ingestion",
      "Dynamic Margin & Elasticity Computation",
      "Bottleneck-free Pricing Cache Evaluation",
      "Instant Client Recommendation Delivery",
    ],
    links: {
      website: "https://precium.in/",
      github: "https://github.com/Vanditjain32001",
    },
  },
  {
    id: "fitpass",
    title: "FITPASS",
    tagline: "All-in-One Fitness & Nutrition Platform Infrastructure",
    type: "HealthTech & Consumer Mobile Infrastructure",
    role: "Backend Integrations Engineer",
    statusBadge: "Live Mobile Apps & Web",
    description:
      "Integrated third-party APIs for real-time computer vision workout tracking and posture correction; built automated diet intake and dietician consultation backend modules.",
    longDescription:
      "FITPASS is one of India's leading fitness platforms, granting members access to gyms, workout studios, and personalized wellness services. Built robust backend modules integrating computer vision for real-time workout posture analysis, personalized exercise recommendations, and automated nutrition intake tracking connecting members directly with certified dieticians.",
    technologies: [
      "Golang",
      "Microservices",
      "REST APIs",
      "PostgreSQL",
      "DynamoDB",
      "Redis",
      "Kafka",
      "Computer Vision API Integrations",
      "Push Notifications",
    ],
    metrics: [
      { label: "Platforms", value: "iOS, Android, Web" },
      { label: "Posture Analysis", value: "Real-time AI Integration" },
      { label: "Diet Tracking", value: "Automated Consultation" },
      { label: "User Base", value: "Millions of Workouts" },
    ],
    challenges: [
      "Synchronizing real-time video posture correction telemetry without degrading mobile client experience.",
      "Designing high-throughput schema structures in DynamoDB & PostgreSQL to accommodate custom nutritional intake targets and dynamic dietician charts.",
      "Seamless communication workflows between end users and clinical dieticians.",
    ],
    architectureOverview:
      "FITPASS Mobile Apps (iOS / Android) → Go Backend API Gateway → Computer Vision Posture Analysis Pipeline → Diet Intake & Nutrition Modules → DynamoDB NoSQL / PostgreSQL Store → Dietician Consultation Portal.",
    pipelineSteps: [
      "Workout Telemetry & Posture Frame Processing",
      "Goal-Oriented Exercise Recommendation Engine",
      "Daily Nutritional Intake Logger",
      "Dietician Meal Plan Review & Consultation Loop",
    ],
    links: {
      website: "https://fitpass.co.in/",
      playStore: "https://play.google.com/store/apps/details?id=com.india.fitpass&hl=en_IN",
      appStore: "https://apps.apple.com/in/app/fitpass-fitness-wellness/id1049745078",
      github: "https://github.com/Vanditjain32001",
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend-systems",
    category: "Backend & Systems Architecture",
    endpoint: "/skills/backend",
    tagline: "High-concurrency microservices, RPC protocols & worker pools",
    iconName: "Cpu",
    skills: [
      {
        name: "Golang (Go)",
        highlight: "High-concurrency goroutines, channels & memory-efficient microservices",
        iconId: "go",
        badge: "Core / <10ms",
        category: "Backend & Systems",
        projects: "All 4 Projects (Catena, Panasonic, Precium, FITPASS)",
      },
      {
        name: "Microservices Architecture",
        highlight: "Decoupled domain services, independent scaling & fault isolation",
        iconId: "microservices",
        badge: "Distributed",
        category: "Backend & Systems",
        projects: "All 4 Projects (Catena, Panasonic, Precium, FITPASS)",
      },
      {
        name: "gRPC & Protocol Buffers",
        highlight: "High-speed binary serialization & low-latency inter-service RPC",
        iconId: "grpc",
        badge: "Binary RPC",
        category: "Backend & Systems",
        projects: "Panasonic E-Mobility & FITPASS",
      },
      {
        name: "RESTful APIs",
        highlight: "Strict OpenAPI contracts, pagination & resilient JSON endpoints",
        iconId: "rest",
        badge: "Production REST",
        category: "Backend & Systems",
        projects: "All 4 Projects (Catena, Panasonic, Precium, FITPASS)",
      },
      {
        name: "Concurrency & Worker Pools",
        highlight: "Buffered channels, mutex sync & lock-free worker pools for zero race conditions",
        iconId: "concurrency",
        badge: "Goroutines",
        category: "Backend & Systems",
        projects: "All 4 Projects (Catena, Panasonic, Precium, FITPASS)",
      },
      {
        name: "Python",
        highlight: "Data transformation pipelines, telematics ingestion scripts & automation",
        iconId: "python",
        badge: "Data & Scripting",
        category: "Backend & Systems",
        projects: "Catena Clearing Platform",
      },
    ],
  },
  {
    id: "data-streaming",
    category: "Databases & Event Streaming",
    endpoint: "/skills/streaming",
    tagline: "Partitioned event streaming, spatial indexing & hot caching",
    iconName: "Database",
    skills: [
      {
        name: "Apache Kafka",
        highlight: "High-volume distributed event streams, consumer groups & partitioning",
        iconId: "kafka",
        badge: "High-Throughput",
        category: "Data & Streaming",
        projects: "FITPASS & Panasonic E-Mobility",
      },
      {
        name: "PostgreSQL",
        highlight: "Relational modeling, GiST spatial indexing & query plan optimization",
        iconId: "postgres",
        badge: "Core RDBMS",
        category: "Data & Streaming",
        projects: "All 4 Projects (Catena, Panasonic, Precium, FITPASS)",
      },
      {
        name: "Redis",
        highlight: "Distributed in-memory caching, atomic rate limiting & sub-millisecond pub/sub",
        iconId: "redis",
        badge: "Sub-millisecond",
        category: "Data & Streaming",
        projects: "All 4 Projects (Catena, Panasonic, Precium, FITPASS)",
      },
      {
        name: "MongoDB",
        highlight: "Flexible document stores, BSON serialization & telematics document streams",
        iconId: "mongo",
        badge: "Document Store",
        category: "Data & Streaming",
        projects: "Panasonic E-Mobility",
      },
      {
        name: "Snowflake",
        highlight: "Cloud enterprise data warehousing, high-throughput analytical ingestion & SQL pipelines",
        iconId: "snowflake",
        badge: "Data Warehouse",
        category: "Data & Streaming",
        projects: "Catena Clearing Platform",
      },
      {
        name: "Amazon DynamoDB",
        highlight: "Single-digit millisecond latency, partition-key design & horizontal auto-scaling NoSQL",
        iconId: "dynamodb",
        badge: "AWS NoSQL",
        category: "Data & Streaming",
        projects: "FITPASS Infrastructure",
      },
    ],
  },
  {
    id: "cloud-devops-ai",
    category: "Cloud, DevOps & AI SDLC",
    endpoint: "/skills/cloud-ai",
    tagline: "Container orchestration, serverless telemetry & AI velocity",
    iconName: "Cloud",
    skills: [
      {
        name: "Docker & Kubernetes",
        highlight: "Multi-stage container builds, pod orchestration & horizontal pod scaling",
        iconId: "docker-k8s",
        badge: "Containers & K8s",
        category: "Cloud & AI",
        projects: "All Production Go Microservices & Cloud Clusters",
      },
      {
        name: "Amazon Web Services (AWS)",
        highlight: "VPC networking, IAM security, EC2, ECS, S3 & production cloud infrastructure",
        iconId: "aws",
        badge: "Cloud Infra",
        category: "Cloud & AI",
        projects: "RemoteState Cloud Infrastructure (All Projects)",
      },
      {
        name: "AWS Lambda",
        highlight: "Serverless execution, event-driven compute & microservice triggers",
        iconId: "lambda",
        badge: "Serverless",
        category: "Cloud & AI",
        projects: "Catena Clearing Telematics",
      },
      {
        name: "AWS CloudWatch",
        highlight: "Metrics telemetry, centralized log streams & infrastructure alarms",
        iconId: "cloudwatch",
        badge: "Observability",
        category: "Cloud & AI",
        projects: "RemoteState Cloud Telemetry",
      },
      {
        name: "Claude",
        highlight: "AI coding agent workflows, rapid schema synthesis & test automation",
        iconId: "claude",
        badge: "Anthropic Certified",
        category: "Cloud & AI",
        projects: "Catena TSP Normalizer & SDLC",
        certificates: [
          {
            title: "Claude Code in Action",
            issuer: "Anthropic Academy",
            url: "https://verify.skilljar.com/c/taxkqbwnri8c",
          },
          {
            title: "Claude Code 101",
            issuer: "Anthropic Academy",
            url: "https://verify.skilljar.com/c/tjgvinqpjkiv",
          },
        ],
      },
    ],
  },
];

export const EXPERIENCES: WorkExperience[] = [
  {
    role: "Software Developer",
    company: "RemoteState",
    period: "June 2023 – Present",
    location: "Noida / New Delhi, India",
    type: "Full-Time",
    summary:
      "Driving backend microservices architecture, serverless pipelines, and database scalability while mentoring engineering team members and championing AI-augmented workflows.",
    achievements: [
      {
        title: "Engineering Leadership & Mentorship",
        desc: "Mentor junior developers through structured code reviews, architectural pairing, and technical guidance, fostering high code quality and engineering standards.",
      },
      {
        title: "AI-Augmented Development (Pioneering SDLC)",
        desc: "Leveraged advanced AI models (Gemini, Claude, Codex) to accelerate the software development life cycle, optimizing code generation, test synthesis, and debugging to increase deployment velocity.",
      },
      {
        title: "Cloud Observability & Telemetry",
        desc: "Architected serverless execution workflows using AWS Lambda and CloudWatch; built production-grade observability dashboards with Grafana and the Elastic (ELK) stack.",
      },
      {
        title: "Database Architecture & Query Optimization",
        desc: "Designed high-performance MongoDB schemas and optimized complex PostgreSQL queries, driving a direct 15% increase in query efficiency across core services.",
      },
    ],
    techUsed: [
      "Golang",
      "Microservices",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "AWS Lambda",
      "CloudWatch",
      "Docker",
      "Kafka",
      "Grafana",
      "Elasticsearch",
    ],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Technology in Computer Science and Engineering (CSE)",
  institution: "Bennett University (Times of India Group)",
  year: "2019 – 2023",
  location: "Greater Noida, India",
  highlights: [
    "Core focus on Distributed Systems, Algorithms, Computer Architecture, and Database Management Systems.",
    "Active contributor to software engineering initiatives and development projects.",
  ],
};
