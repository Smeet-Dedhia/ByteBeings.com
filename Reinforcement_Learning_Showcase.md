# Reinforcement Learning & Preference Models

Designing robust reward systems, deterministic execution environments, and policy optimization frameworks to align AI behavior with real-world efficiency.

## Sequel2SQL & Reinforcement Learning from Execution Feedback (RLEF)

In my capstone project, **Sequel2SQL**, sponsored by **Microsoft**, I addressed the challenge of translating natural language to SQL. While standard supervised fine-tuning generates functionally correct queries, it often produces computationally disastrous execution plans for enterprise databases (e.g., triggering massive nested loops instead of efficient hash joins).

To solve this, I designed a deterministic RLEF environment using a live PostgreSQL engine to train models in **Algorithmic Refactoring**. By using strict hardware execution metrics rather than a biased LLM-as-a-Judge, RLEF actively guides the LLM to write **better, highly-efficient SQL** that natively utilizes database indices, minimizes buffer reads, and optimizes query planner paths.

### State & Action Space
* **Observation:** Models observe the full highly normalized schema, realistic database statistics (row counts, value estimates), and the computationally inefficient baseline query.
* **Action:** A two-step generation enforcing an explicit reasoning trace of query planner constraints, followed by the highly optimized SQL output.

### Deterministic Reward Signal
* **Query Planner Efficiency:** The environment runs `EXPLAIN` to extract actual execution cost, rewarding the model for learning index utilization and hash joins.
* **Hardware I/O Analysis:** Modifiers are applied based on physical disk buffer reads vs. memory hits, heavily penalizing queries that force full table scans on disk.

### Mitigating Reward Hacking
RL loops in code generation are highly susceptible to agents cheating the reward system. I architected specific defenses:
* **Literal Matching Hacks:** Implemented hidden dataset replicas to prevent models from hardcoding strings to pass equivalence checks.
* **Empty Result Hacks:** Strict baseline comparison immediately fails queries that append `LIMIT 0` to artificially lower execution time.
* **Planner Manipulation:** Evaluated on `EXPLAIN ANALYZE` hardware execution, not just theoretical cost estimates.

## LLM Alignment & Preferences (Generative AI)

Moving beyond next-token prediction, I build systems that teach models **how to think**. By utilizing reward models and preference optimization, I align foundational models to complex objectives where simple supervised fine-tuning falls short.

* **RLHF & DPO:** Leveraged Reinforcement Learning from Human Feedback and Direct Preference Optimization to align LLMs. Shifted models from generic generation to highly specialized, context-aware behaviors.
* **Huggingface TRL:** Extensively utilized the Huggingface ecosystem, specifically the Transformer Reinforcement Learning (TRL) library, to orchestrate complex PPO loops and preference model training pipelines.
* **Sequel2SQL Capstone:** Applied these advanced alignment techniques in a Microsoft-sponsored capstone project. Optimized language models for Natural Language to SQL translation, ensuring semantic accuracy in enterprise environments. ([Check Code Notebook](https://github.com/Smeet-Dedhia/sequel2sql/blob/main/notebooks/))

## Foundational Knowledge (Theory & Implementation)

* **Classical RL Theory:** Studied core reinforcement learning theory directly from the works of Barto and Sutton. Mastered Markov Decision Processes (MDPs), value iteration, and foundational policy evaluation.
* **Multi-Armed Bandits:** Implemented and analyzed exploration vs. exploitation tradeoffs using Multi-Armed Bandit algorithms, understanding the math behind optimal action selection and regret bounds.
* **Deep Q-Learning:** Completed intensive coursework bridging classical RL with deep neural networks. Built Deep Q-Network (DQN) agents to approximate value functions in continuous and high-dimensional state spaces.
