# rLLM UI

Web interface for [rLLM](https://github.com/rllm-org/rllm), a framework for training language agents via reinforcement learning.

## Features

- **Real-time Training Monitoring**: Live metrics and progress tracking via Server-Sent Events
- **Episode Visualization**: View trajectory details with multi-agent workflows
- **Source Code Display**: See workflow and reward function implementations
- **Progress Tracking**: Visual progress bar with epoch/batch information

## Architecture

```
rllm-ui/
├── backend/
│   ├── api/          FastAPI server (metrics, episodes, sessions)
│   └── rllm/         rLLM framework (submodule)
└── frontend/         React + TypeScript UI
```

## Quick Start

### Prerequisites

- Python 3.11+
- Node.js 18+ or Bun
- Git

### Installation

```bash
# Clone with submodules
git clone --recursive https://github.com/Chanbinski/rllm-ui.git
cd rllm-ui

# Or if already cloned
git submodule update --init --recursive

# Backend setup
cd backend/api
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Frontend setup
cd ../../frontend
bun install  # or npm install
```

### Running

**Terminal 1 - Backend API:**
```bash
cd backend/api
source venv/bin/activate
python -m uvicorn main:app --reload --port 3000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
bun run dev  # or npm run dev
```

Open http://localhost:5173

### Running Training

```bash
cd backend/rllm
source .venv/bin/activate

# Prepare dataset
python -m examples.countdown.prepare_countdown_data

# Run training with UI logger
python ../../test_ui_training.py
```

## Development

The `backend/rllm` directory is a git submodule pointing to a fork of rllm with UI integration changes.

To update rllm:
```bash
cd backend/rllm
git pull origin rllm-ui-integration
cd ../..
git add backend/rllm
git commit -m "Update rllm submodule"
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

For rllm framework changes, contribute to [rllm-org/rllm](https://github.com/rllm-org/rllm).

## License

MIT
