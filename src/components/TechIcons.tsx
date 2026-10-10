import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

// 1. Golang Official Cyan Logo
export const GoIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <path
      d="M1.8 10.9c-.1-.3-.1-.5 0-.7.3-.6 1.4-1.3 2.9-1.3 1.3 0 2.2.6 2.5 1.1.2.3.2.7 0 1-.3.7-1.4 1.4-2.8 1.4-1.6 0-2.4-.7-2.6-1.5zm6.5 2.8c-.3-.2-.4-.5-.4-.8 0-.3.2-.6.4-.8 1.1-.9 3.2-1.4 5.4-1.4 1.9 0 3.3.4 4.2 1.1.5.4.6.9.3 1.4-.4.7-1.8 1.3-3.6 1.3-2.6 0-4.8-.8-5.9-1.6v.8zm11.5-2.2c-.2-.4-.6-.7-1.1-.9-.7-.3-1.6-.4-2.7-.4-1.7 0-3 .5-3.8 1.2-.4.4-.5.9-.2 1.3.4.6 1.5 1.1 2.9 1.1 1.7 0 3.2-.5 4.1-1.3.5-.4.8-.7.8-1zm-9.3-5.2c-.3-.3-.4-.7-.2-1 .3-.5 1.2-1.1 2.4-1.1 1.1 0 1.8.4 2.1.8.2.3.2.7 0 1-.3.5-1.1 1-2.2 1-1.2 0-1.8-.4-2.1-.7z"
      fill="#00ADD8"
    />
    <path
      d="M14.5 15.6c-.2.2-.4.3-.7.3-1 0-1.7-.8-1.7-1.8 0-.9.7-1.7 1.7-1.7.5 0 .9.2 1.2.5l.7-.7c-.5-.5-1.1-.7-1.9-.7-1.6 0-2.9 1.2-2.9 2.8s1.3 2.8 2.9 2.8c.8 0 1.5-.3 2-.9l-.6-.7zm4.2-3.6c-1.6 0-2.8 1.2-2.8 2.8s1.3 2.8 2.8 2.8c1.6 0 2.8-1.2 2.8-2.8s-1.2-2.8-2.8-2.8zm0 4.6c-1 0-1.7-.8-1.7-1.8 0-.9.7-1.7 1.7-1.7s1.7.8 1.7 1.7c0 1-.7 1.8-1.7 1.8z"
      fill="#00ADD8"
    />
  </svg>
);

// 2. Apache Kafka
export const KafkaIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <img
    src="/apache-kafka.png"
    alt="Apache Kafka"
    className={`${className} object-contain`}
    width={size || 20}
    height={size || 20}
  />
);

// 3. PostgreSQL Elephant Logo
export const PostgresIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <img
    src="/Postgresql_elephant.svg"
    alt="PostgreSQL"
    className={`${className} object-contain`}
    width={size || 20}
    height={size || 20}
  />
);

// 4. Redis Logo
export const RedisIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <path
      d="M2.5 7.5L12 2.5l9.5 5-9.5 5-9.5-5zm0 4.5l9.5 5 9.5-5v3l-9.5 5-9.5-5v-3zm0 4.5l9.5 5 9.5-5v3l-9.5 5-9.5-5v-3z"
      fill="#DC382D"
    />
  </svg>
);

// 5. MongoDB Leaf Logo
export const MongoIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <path
      d="M12 2C11.6 2.8 8 9.5 8 13.5c0 3.3 2.1 6.1 4 7 1.9-.9 4-3.7 4-7 0-4-3.6-10.7-4-11.5zm0 17.5c-1.5-.7-3-2.9-3-6 0-2.8 2.3-7.2 3-8.5.7 1.3 3 5.7 3 8.5 0 3.1-1.5 5.3-3 6z"
      fill="#47A248"
    />
    <path d="M12 2v18.5c0 .2-.1.3-.2.3s-.2-.1-.2-.3V2c.1 0 .3 0 .4 0z" fill="#3FA037" />
  </svg>
);

// 6. Docker Whale Logo
export const DockerIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <path
      d="M4.5 10.5h2v2h-2v-2zm2.5 0h2v2H7v-2zm2.5 0h2v2h-2v-2zm2.5 0h2v2h-2v-2zm-5-2.5h2v2H7V8zm2.5 0h2v2h-2V8zm2.5 0h2v2h-2V8zm-2.5-2.5h2v2h-2v-2zm12 6.5c-.3-.2-1.3-.4-2.5.2-.2-.8-.7-1.5-1.5-1.8l-.5-.2-.3.4c-.4.5-.6 1.2-.6 1.9H2.4c-.2.7 0 2.8 1.4 4.5C5.4 19 8.2 19.5 11.5 19.5c5.8 0 9.8-3.3 10.5-7.5.3 0 .7.1 1 .2.5.2.9.1 1.2-.1l-.2-.6h-2z"
      fill="#2496ED"
    />
  </svg>
);

// 7. Kubernetes Helm Logo
export const KubernetesIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <path
      d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.31L5.34 8.15v7.69L12 19.69l6.66-3.85V8.15L12 4.31zm0 3.19a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
      fill="#326CE5"
    />
  </svg>
);

// 8. AWS Cloud Logo
export const AwsIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <img
    src="/aws-dark.png"
    alt="AWS"
    className={`${className} object-contain`}
    width={size || 20}
    height={size || 20}
  />
);

// 9. gRPC Protocol Logo
export const GrpcIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <path
      d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.24l6.75 3.75v7.5L12 19.24l-6.75-3.75v-7.5L12 4.24zM8 9v6h2v-2h4v2h2V9h-2v2h-4V9H8z"
      fill="#244C5A"
    />
  </svg>
);

// 10. Grafana Flame Logo
export const GrafanaIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <path
      d="M12 2C8.5 6 6 9.5 6 13c0 3.3 2.7 6 6 6s6-2.7 6-6c0-3.5-2.5-7-6-11zm0 15c-1.7 0-3-1.3-3-3 0-1.5 1-3.2 3-5.2 2 2 3 3.7 3 5.2 0 1.7-1.3 3-3 3z"
      fill="#F46800"
    />
  </svg>
);

// 11. Microservices Architecture Logo
export const MicroservicesIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <circle cx="6" cy="6" r="3" className="stroke-cyan-400 fill-cyan-400/20" />
    <circle cx="18" cy="6" r="3" className="stroke-purple-400 fill-purple-400/20" />
    <circle cx="6" cy="18" r="3" className="stroke-indigo-400 fill-indigo-400/20" />
    <circle cx="18" cy="18" r="3" className="stroke-emerald-400 fill-emerald-400/20" />
    <path d="M9 6h6M6 9v6M18 9v6M9 18h6M8.5 8.5l7 7M15.5 8.5l-7 7" className="stroke-slate-600" />
  </svg>
);

// 12. REST APIs Logo
export const RestApiIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <rect x="2" y="5" width="20" height="14" rx="3" className="stroke-sky-400 fill-sky-400/10" />
    <path d="M7 12h3M14 12h3M10 9l2 3-2 3M14 9l2 3-2 3" className="stroke-sky-400" />
  </svg>
);

// 13. Concurrency & Worker Pools
export const ConcurrencyIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <path d="M4 6h16M4 12h16M4 18h16" className="stroke-purple-400" />
    <circle cx="8" cy="6" r="2" className="fill-purple-400 stroke-purple-300" />
    <circle cx="14" cy="12" r="2" className="fill-indigo-400 stroke-indigo-300" />
    <circle cx="10" cy="18" r="2" className="fill-cyan-400 stroke-cyan-300" />
  </svg>
);

// 14. SQL Query Optimization
export const SqlIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <ellipse cx="12" cy="5" rx="8" ry="3" className="stroke-indigo-400 fill-indigo-400/20" />
    <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" className="stroke-indigo-400" />
    <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" className="stroke-indigo-400" />
  </svg>
);

// 15. AI-Augmented SDLC (Gemini / Claude / Codex)
export const AiSdlcIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <path
      d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
      fill="url(#aiGradient)"
    />
    <defs>
      <linearGradient id="aiGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A855F7" />
        <stop offset="0.5" stopColor="#6366F1" />
        <stop offset="1" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
  </svg>
);

// 16. Claude (Anthropic) Official Logo
export const ClaudeIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <img
    src="/claude.svg"
    alt="Claude"
    className={`${className} object-contain`}
    width={size || 20}
    height={size || 20}
  />
);

// 17. AWS Lambda (Serverless Compute)
export const LambdaIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <img
    src="/Amazon_Lambda_architecture_logo.svg.webp"
    alt="AWS Lambda"
    className={`${className} object-contain rounded-[4px]`}
    width={size || 20}
    height={size || 20}
  />
);

// 18. AWS CloudWatch (Observability & Monitoring)
export const CloudWatchIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <img
    src="/cloudwatch.png"
    alt="AWS CloudWatch"
    className={`${className} object-contain rounded-[4px]`}
    width={size || 20}
    height={size || 20}
  />
);

// 19. Python Official Blue & Yellow Logo
export const PythonIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <path
      d="M11.9 2C9.4 2 7.4 2.3 7.4 3.7v2.4h4.7v.7H5.2C3.8 6.8 2.6 8 2.6 10.3c0 2.3 1.2 3.6 2.6 3.6h1.5v-2.1c0-1.6 1.4-2.9 2.9-2.9h4.6c1.3 0 2.3-1.1 2.3-2.4V3.7C16.5 2.3 14.5 2 11.9 2zm-1.3 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
      fill="#3776AB"
    />
    <path
      d="M12.1 22c2.5 0 4.5-.3 4.5-1.7v-2.4h-4.7v-.7h6.9c1.4 0 2.6-1.2 2.6-3.5 0-2.3-1.2-3.6-2.6-3.6h-1.5v2.1c0 1.6-1.4 2.9-2.9 2.9H9.8c-1.3 0-2.3 1.1-2.3 2.4v3.2c0 1.4 2 1.7 4.6 1.7zm1.3-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
      fill="#FFD43B"
    />
  </svg>
);

// 20. Snowflake Data Warehouse Logo
export const SnowflakeIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <path
      d="M7.602 12.4c.038-.151.076-.304.076-.456 0-.114-.038-.228-.038-.342-.114-.343-.304-.647-.646-.838l-4.87-2.777c-.685-.38-1.56-.152-1.94.533-.381.685-.153 1.56.532 1.94l2.701 1.56-2.701 1.56c-.685.38-.913 1.256-.533 1.94.38.685 1.256.914 1.94.533l4.832-2.777c.343-.267.571-.533.647-.876zm1.332 2.626c-.266-.038-.57.038-.837.19l-4.832 2.777c-.685.38-.913 1.256-.532 1.94.38.686 1.255.914 1.94.533l2.701-1.56v3.12c0 .8.647 1.408 1.446 1.408.799 0 1.407-.647 1.407-1.408v-5.592c0-.761-.57-1.37-1.293-1.408zm4.946-6.088c.266.038.57-.038.837-.19l4.832-2.777c.685-.38.913-1.256.532-1.94-.38-.686-1.255-.914-1.94-.533l-2.701 1.56V1.975c0-.799-.647-1.408-1.446-1.408-.799 0-1.446.609-1.446 1.408V7.53c0 .76.609 1.37 1.332 1.407zM3.265 5.97l4.832 2.777c.266.152.533.19.837.19.723-.038 1.331-.684 1.331-1.407V1.975c0-.799-.646-1.408-1.407-1.408-.799 0-1.446.647-1.446 1.408v3.12l-2.701-1.56c-.685-.38-1.56-.152-1.94.533-.419.646-.19 1.521.494 1.902zm9.093 6.011a.412.412 0 00-.114-.266l-.57-.571a.346.346 0 00-.267-.114.412.412 0 00-.266.114l-.571.57a.411.411 0 00-.114.267c0 .076.038.19.114.267l.57.57a.345.345 0 00.267.114c.076 0 .19-.038.266-.114l.571-.57a.412.412 0 00.114-.267zm1.598.533L11.94 14.53c-.039.038-.153.114-.229.114h-.608a.411.411 0 01-.267-.114L8.82 12.514a.408.408 0 01-.076-.229v-.608c0-.076.038-.19.114-.267l2.016-2.016a.41.41 0 01.267-.114h.608a.41.41 0 01.267.114l2.016 2.016a.347.347 0 01.114.267v.608c-.076.077-.114.19-.19.229zm5.593 5.44l-4.832-2.777c-.266-.152-.57-.19-.837-.152-.723.038-1.332.684-1.332 1.408v5.554c0 .8.647 1.408 1.408 1.408.799 0 1.446-.647 1.446-1.408v-3.12l2.7 1.56c.686.38 1.561.152 1.941-.533.419-.646.19-1.521-.494-1.94zm2.549-7.533l-2.701 1.56 2.7 1.56c.686.38.914 1.256.533 1.94-.38.685-1.255.913-1.94.533l-4.832-2.778a1.644 1.644 0 01-.647-.798c-.037-.153-.076-.305-.076-.457 0-.114.039-.228.039-.342.114-.343.342-.647.646-.837l4.832-2.778c.685-.38 1.56-.152 1.94.533.457.609.19 1.484-.494 1.864"
      fill="#29B5E8"
    />
  </svg>
);

// 21. Amazon DynamoDB Logo
export const DynamoDbIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    <defs>
      <linearGradient id="dynamoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#2e27ad" />
        <stop offset="100%" stopColor="#527fff" />
      </linearGradient>
    </defs>
    <rect width="128" height="128" rx="20" fill="url(#dynamoGrad)" />
    <path
      d="M56.745 21.266c-14.062 0-29.013 4.164-29.013 11.947v13.736a6.93 6.93 0 002.577 5.037 6.946 6.946 0 00-2.577 5.12v13.653a6.93 6.93 0 002.577 5.12A6.946 6.946 0 0027.732 81v13.654a2.133 2.133 0 000 .356c.46 7.493 15.138 11.52 29.013 11.52 13.876 0 28.553-4.027 29.014-11.553a1.28 1.28 0 000-.36V80.963a6.827 6.827 0 00-2.577-5.12 6.93 6.93 0 002.577-5.12v-1.637l-11.28 11.263a27.7 27.7 0 005.836-2.373 4.403 4.403 0 012.03 3.073c0 3.124-6.62 6.521-16.45 7.904a72.073 72.073 0 01-9.15.646H55.04c-13.79-.324-23.894-4.676-23.894-8.533a4.403 4.403 0 012.034-3.07c5.359 2.987 14.043 4.76 23.566 4.76h.19l.954-3.413h-1.144c-9.386 0-18.088-1.862-22.713-4.797-1.843-1.212-2.87-2.523-2.887-3.667v-7.903c5.223 3.994 15.634 6.077 25.6 6.077 1.349 0 2.7 0 4.014-.12l.97-3.414c-1.707.12-3.294.17-4.984.17-14.643 0-25.6-4.488-25.6-8.533a4.403 4.403 0 012.034-3.073c4.71 2.645 11.944 4.3 20.153 4.676l.087-3.413c-8.073-.393-15.36-2.133-19.387-4.71-1.826-1.178-2.852-2.51-2.887-3.67v-7.883c5.223 3.993 15.634 6.076 25.6 6.076h.377l1.81-3.413h-2.187c-14.643 0-25.6-4.489-25.6-8.533 0-4.045 10.957-8.534 25.6-8.534a61.44 61.44 0 0114.644 1.707h9.37c-5.12-3.123-13.961-5.12-24.014-5.12zm12.8 8.517a1.707 1.707 0 00-1.516.936L57.789 51.2a1.707 1.707 0 001.516 2.527h9.66l-9.59 31.93a1.707 1.707 0 00.784 1.963 1.707 1.707 0 00.853.24 1.707 1.707 0 001.317-.58l37.546-39.253a1.707 1.707 0 00-1.23-2.883h-9.573l4.367-13.127a1.707 1.707 0 00-1.707-2.233zm.957 3.43h18.773l-4.37 13.106a1.707 1.707 0 001.707 2.254h7.953l-29.883 31.23 8.21-27.307a1.707 1.707 0 00-.273-1.5 1.707 1.707 0 00-1.367-.683h-9.18zm-34.237 11.62a2.133 2.133 0 00-2.133 2.133 2.133 2.133 0 002.133 2.133 2.133 2.133 0 002.134-2.133 2.133 2.133 0 00-2.134-2.133zm0 23.893a2.133 2.133 0 00-2.133 2.133 2.133 2.133 0 002.133 2.134 2.133 2.133 0 002.134-2.134 2.133 2.133 0 00-2.134-2.133zm-5.12 18.11c5.223 3.96 15.634 6.04 25.6 6.04 9.967 0 20.378-2.08 25.6-6.04v7.85c0 4.028-10.956 8.533-25.6 8.533-14.643 0-25.6-4.454-25.6-8.533zm5.12 5.783a2.133 2.133 0 00-2.133 2.134 2.133 2.133 0 002.133 2.133 2.133 2.133 0 002.134-2.133 2.133 2.133 0 00-2.134-2.134z"
      fill="#fff"
    />
  </svg>
);

// 22. Docker & Kubernetes Combined Logo
export const DockerK8sIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <div className="flex items-center -space-x-1 shrink-0 justify-center">
    <DockerIcon className="w-3.5 h-3.5 shrink-0" />
    <KubernetesIcon className="w-3.5 h-3.5 shrink-0" />
  </div>
);

