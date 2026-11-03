export const PROFILE_DATA = {
  name: "Dimas Tri Kurniawan",
  role: "AI / ML Engineer",
  tagline: "Memiliki kemampuan dalam merancang Large Language Models (LLM), Retrieval-Augmented Generation (RAG), Computer Vision System, AI Research, dan AI Automation.",
  location: "Bandung / Jakarta, Indonesia",
  email: "kurniawan3dimas@email.com",
  github: "https://github.com/dhekmass12",
  linkedin: "https://www.linkedin.com/in/dimas-tri-kurniawan",
};

export const PROJECTS_DATA = [
  {
    id: "mAIntain",
    title: "mAIntain: Real-Time Machine AI Agent",
    category: "LLM & RAG",
    shortDesc: "Sistem AI Agent untuk untuk prediksi kegagalan mesin dan pemeliharaan prediktif.",
    fullArchitecture: "Sistem monitoring kesehatan mesin berbasis real-time dashboard, forecasting, dan pemeliharaan mesin secara otomatis. Dilengkapi dengan chatbot serbaguna untuk memudahkan monitoring dan pemeliharaan mesin",
    metrics: [
      { name: "Tool-calling Accuration", val: "96%" },
    ],
    techStack: ["PyTorch", "Ollama", "LangChain", "RAG", "FAISS", "FastAPI", "Python", "LLM", "Pgvector", "QLoRA"],
    media: {
      photoUrl: "/media/mAIntain.jpg",
      videoUrl: "/media/mAIntain.mp4",
    }
  },
  {
    id: "Bima",
    title: "Bima: Real-Time Human Detection Multi-CCTV System",
    category: "Computer Vision",
    shortDesc: "Sebuah sistem Smart CCTV yang dapat menghitung dan menemukan koordinat setiap orang di suatu ruangan.",
    fullArchitecture: "Menggunakan model YOLO26-s yang dilatih kembali dengan dataset perusahaan. Sistem menganalisis tampilan dari berbagai 2D CCTV dan memproses hasilnya dengan pendekatan matematis sehingga didapat banyak orang dalam suatu ruangan dan juga koordinat 3D-nya (x, y, z).",
    metrics: [
      { name: "mAP@50-95", val: "89%" },
      { name: "Frame Rate", val: "30-60 FPS" }
    ],
    techStack: ["YOLO26", "PyTorch", "Python", "OpenCV", "UDP", "RTSP"],
    media: {
      photoUrl: "/media/bima.jpg",
      videoUrl: "/media/bima.mp4",
    }
  },
  {
    id: "fish-basket-counter",
    title: "Fish Basket Counter",
    category: "Computer Vision",
    shortDesc: "Aplikasi penghitung keranjang ikan berbasis computer vision.",
    fullArchitecture: "Mengembangkan model YOLO untuk edge computing yang dapat digunakan untuk menghitung banyaknya keranjang ikan. Aplikasi ini dibuat untuk mempercepat perhitungan keranjang ikan oleh enumerator ikan di pelabuhan Klidang Lor",
    metrics: [
      { name: "Accuracy", val: "95%" },
    ],
    techStack: ["YOLOv8", "Flutter"],
    githubUrl: "https://github.com/dhekmass12/fish-basket-counter.git",
    media: {
      photoUrl: "/media/fish_basket_counter.png",
      videoUrl: "",
    }
  },
  {
    id: "mindflow",
    title: "Mindflow: Product Marketing Automation",
    category: "AI Automation",
    shortDesc: "Platform otomasi pemasaran produk mulai dari perancangan ide, konten, video pemasaran, hingga posting otomatis ke media sosial.",
    fullArchitecture: "Platform menggunakan Gemini AI untuk mencari ide yang berhubungan dengan trend saat ini. Setelah itu, akan dibuat konten dan juga video yang sesuai dengan ide yang telah dipilih (melalui telegram bot. Konten dan ide juga akan disesuaikan dengan produk perusahaan secara otomatis melalui teknik retrieval information. Selanjutnya, konten dan video akan diposting secara otomatis melalui n8n.",
    metrics: [
      { name: "Content Generation / month", val: "60" },
      { name: "Cost Savings", val: "90%" },
    ],
    techStack: ["n8n", "Gemini AI", "Pgvector", "React", "FastAPI", "Google Flow"],
    media: {
      photoUrl: "/media/mindflow.webp",
      videoUrl: "/media/mindflow.mp4",
    }
  }
];

export const PLAYGROUND_PRESETS = [
  {
    id: "rag-arch",
    label: "Optimasi Latensi RAG",
    prompt: "Bagaimana cara menurunkan Time-To-First-Token (TTFT) pada sistem Enterprise RAG menjadi di bawah 200ms?",
    response: "Untuk mencapai TTFT < 200ms pada skala produksi:\n1. Gunakan Semantic Caching (Redis/Qdrant) untuk mem-bypass retrieval pada query berulang.\n2. Terapkan Quantization AWQ 4-bit atau FP8 dengan PagedAttention di vLLM disertai fitur Prefix Caching untuk System Prompt.\n3. Batasi konteks hasil Cross-Encoder Reranker maksimal 5 chunk teratas menggunakan model ringan seperti BGE-Reranker-v2-Mini.",
    sources: ["vLLM PagedAttention Paper (SOSP 2023)", "Internal Benchmark: TensorRT-LLM vs vLLM v0.5"]
  },
  {
    id: "cv-edge",
    label: "Kuantisasi INT8 TensorRT",
    prompt: "Apa strategi terbaik menjaga akurasi mAP saat melakukan kuantisasi model YOLOv8 dari FP32 ke INT8?",
    response: "Strategi mencegah penurunan mAP saat konversi ke INT8:\n1. Gunakan Quantization-Aware Training (QAT) selama 15 epoch terakhir dibanding Post-Training Quantization (PTQ) murni.\n2. Siapkan dataset kalibrasi minimal 500 citra yang merepresentasikan kondisi pencahayaan ekstrem.\n3. Biarkan layer sensitif di bagian kepala deteksi (Detection Head / SiLU terakhir) tetap berada di presisi FP16 (Mixed Precision Graph).",
    sources: ["NVIDIA TensorRT Developer Guide", "Production Log: AegisVision Jetson Orin Deployment"]
  },
  {
    id: "finetune-lora",
    label: "Fine-Tuning QLoRA vs Full",
    prompt: "Kapan harus memilih QLoRA dibanding Full Fine-Tuning untuk adaptasi domain bahasa Indonesia?",
    response: "Pemilihan metode bergantung pada tujuan adaptasi:\n1. Gunakan QLoRA (Rank r=64, alpha=128 pada seluruh linear layers) jika tujuannya adalah Instruction Tuning atau penyesuaian format output (hemat hingga 75% VRAM).\n2. Gunakan Continued Pre-Training / Full Fine-Tuning dengan DeepSpeed ZeRO-3 apabila model dasar belum memahami kosakata spesifik domain (misal: istilah hukum atau medis lokal).",
    sources: ["Dettmers et al. QLoRA Paper", "Benchmark Evaluasi IndoMMLU 2025"]
  }
];

export const SKILLS_DATA = [
  {
    category: "Deep Learning & GenAI",
    items: ["PyTorch", "Transformers (HuggingFace)", "vLLM & TensorRT-LLM", "LoRA / QLoRA / DPO", "LangGraph & LlamaIndex", "FlashAttention-2"]
  },
  {
    category: "Computer Vision & Multimodal",
    items: ["YOLOv8 / RT-DETR", "NVIDIA DeepStream", "OpenCV & Albumentations", "CLIP / LLaVA / LayoutLMv3", "ONNX Runtime", "CUDA / Triton Kernels"]
  },
  {
    category: "MLOps & Cloud Infrastructure",
    items: ["Docker & Kubernetes (EKS/GKE)", "Ray Distributed Compute", "Triton Inference Server", "MLflow & Weights & Biases", "Qdrant & Milvus Vector DB", "FastAPI & gRPC"]
  }
];
