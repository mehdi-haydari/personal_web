import SiteHeader from "./SiteHeader.jsx";

export default function VoiceAgentPage() {
  return (
    <>
      <SiteHeader homePage="../../index.html" />
      <main id="main" className="shell">
        <section className="case-hero" aria-labelledby="case-title">
          <a className="case-back" href="../../index.html#work">← Back to selected work</a>
          <div className="case-hero-layout">
            <div>
              <div className="eyebrow">Engineering case / Applied AI</div>
              <h1 id="case-title">A voice assistant.<br /><span className="lime">For incomplete clues.</span></h1>
              <p className="case-intro">A local voice assistant that helps a real-estate office route Turkish-speaking callers to the right consultant, even when the conversation starts with “I saw your number on a banner.”</p>
              <div className="case-actions">
                <a className="action primary" href="https://github.com/mehdi-haydari/turkish-real-estate-voice-assistant" target="_blank" rel="noopener noreferrer">View project on GitHub <span aria-hidden="true">↗</span></a>
              </div>
              <div className="case-state"><strong>Browser prototype · In development</strong></div>
            </div>
            <div className="case-hero-visual" aria-label="Illustrative context: banner source, rental apartment clue, and several possible listings">
              <div className="voice-wave" aria-hidden="true"><i style={{ "--bar": 20 }}></i><i style={{ "--bar": 38 }}></i><i style={{ "--bar": 65 }}></i><i style={{ "--bar": 32 }}></i><i style={{ "--bar": 90 }}></i><i style={{ "--bar": 58 }}></i><i style={{ "--bar": 100 }}></i><i style={{ "--bar": 72 }}></i><i style={{ "--bar": 43 }}></i><i style={{ "--bar": 80 }}></i><i style={{ "--bar": 35 }}></i><i style={{ "--bar": 55 }}></i><i style={{ "--bar": 25 }}></i></div>
              <div className="context-row"><span>SOURCE</span><strong>Street banner</strong></div>
              <div className="context-row"><span>KNOWN</span><strong>Rental · Apartment</strong></div>
              <div className="context-row"><span>RESULT</span><strong>Several possible listings</strong></div>
              <p className="illustration-label">Illustrative search context, not a live call.</p>
            </div>
          </div>
          <div className="case-meta"><div><span>My role</span>End-to-end prototype development</div><div><span>Focus</span>Dialogue · Consultant routing · Evaluation</div><div><span>Execution</span>Local inference on macOS</div></div>
        </section>

        <nav className="case-contents" aria-label="Case study sections"><a href="#problem">The problem</a><a href="#flow">How it works</a><a href="#decisions">Decisions</a><a href="#technology">Technology</a><a href="#evaluation">Evaluation</a><a href="#limits">Limits</a><a href="#installation">Installation</a></nav>

        <section className="case-section" id="problem" aria-labelledby="problem-title">
          <div className="eyebrow">01 / The problem</div><h2 id="problem-title">The caller rarely has every detail.</h2>
          <div className="case-two-col">
            <div><p>The idea came from the everyday workflow of a real-estate office. People call after seeing a listing on Sahibinden or a phone number on a physical banner. Some know the listing ID. Others remember only that it was a rental apartment.</p><p>The goal is to identify who should call the person back. The assistant collects the clues the caller has, confirms a listing when it can, and prepares callback details for the responsible consultant. Sometimes the consultant is known even when the exact property is unclear.</p></div>
            <figure className="case-quote"><blockquote style={{ margin: 0 }}><p lang="tr">“Afişteki numaranızı gördüm. Kiralık bir daireydi.”</p></blockquote><figcaption>“I saw your number on the banner. It was an apartment for rent.”<br />An illustrative caller scenario.</figcaption></figure>
          </div>
          <div className="case-routes">
            <div className="case-route"><b>A / LISTING NUMBER</b><strong>A Sahibinden ID is available.</strong><p>Normalize the stated number and use an exact lookup. Ask the caller to confirm the matching record.</p></div>
            <div className="case-route"><b>B / CONSULTANT</b><strong>The caller remembers a name.</strong><p>Restrict the search to that consultant’s records. One consultant may represent several properties, so the name alone may not identify the listing.</p></div>
            <div className="case-route"><b>C / PARTIAL CLUES</b><strong>The banner is all they remember.</strong><p>Use location, rent/sale, property type, rooms, floor or surroundings to rank candidates. Ask for useful missing evidence, and allow the result to remain unresolved.</p></div>
          </div>
        </section>

        <section className="case-section" id="flow" aria-labelledby="flow-title">
          <div className="eyebrow">02 / How it works</div><h2 id="flow-title">From speech to a useful next step.</h2>
          <p>The React interface captures microphone audio and shows a timestamped transcript. Each turn exposes separate timings for speech endpointing, transcription, clue extraction, listing search and speech generation. An offline text evaluation runs the same conversation controller and listing service with simulated callers.</p>
          <figure className="case-flowchart" aria-labelledby="flowchart-caption">
            <div className="flowchart-heading"><span>CONVERSATION FLOW</span><span>Local prototype</span></div>
            <picture>
              <source media="(max-width: 760px)" srcSet="../../assets/voice-flow-mobile.svg" width="360" height="1600" />
              <img src="../../assets/voice-flow-desktop.svg" width="1140" height="810" alt="Flowchart: listen and transcribe, extract clues, update conversation state, and search listings. A strong candidate goes to caller confirmation and a temporary callback summary. Otherwise ask a useful question and loop back with the answer, or explain that there is not enough information." decoding="async" />
            </picture>
            <figcaption id="flowchart-caption">New answers return to listening and update the search. A rejected property is excluded. When no useful question remains, the assistant explains the uncertainty. Callback details are temporary; no message is sent.</figcaption>
          </figure>
          <details className="case-details flow-step-details">
            <summary>Read the six steps in detail</summary>
          <ol className="case-pipeline">
            <li><span className="step-number">01 / LISTEN</span><h3>Find the speech boundary.</h3><p>Silero VAD detects speech and pauses in the audio stream. A completed utterance goes to whisper.cpp for Turkish transcription.</p></li>
            <li><span className="step-number">02 / EXTRACT</span><h3>Turn words into fields.</h3><p>Qwen returns structured listing clues: source, number, consultant, location, property type, room layout, floor and explicitly unknown information.</p></li>
            <li><span className="step-number">03 / REMEMBER</span><h3>Keep context across turns.</h3><p>The application merges new facts with earlier answers. It tracks unavailable information and previously asked topics in temporary browser state.</p></li>
            <li><span className="step-number">04 / SEARCH</span><h3>Rank the possible properties.</h3><p>A separate FastAPI service searches fictional JSON listings. Exact IDs take priority; field matches and contradictions contribute to explainable candidate scores.</p></li>
            <li><span className="step-number">05 / CLARIFY</span><h3>Ask about a difference.</h3><p>Candidate field distributions constrain the next question. Qwen chooses an eligible field; application checks reject forbidden choices. No useful question is a valid outcome.</p></li>
            <li><span className="step-number">06 / CONFIRM</span><h3>Check the match.</h3><p>The caller confirms or rejects a proposed listing. Once the right consultant is known, the demo can collect a name and verify a phone number for a simulated callback. FreyaTTS can speak the reply.</p></li>
          </ol>
          </details>
          <div className="case-callout"><p><strong>The next question depends on the remaining candidates.</strong> If all candidates are apartments for rent, asking “Was it for rent?” adds little. A floor or room-layout question may help—unless the caller has already said they do not know.</p></div>
        </section>

        <section className="case-section" id="decisions" aria-labelledby="decisions-title">
          <div className="eyebrow">03 / Engineering decisions</div><h2 id="decisions-title">Bound the model’s responsibilities.</h2>
          <article className="case-decision"><h3>Local inference, separate components.</h3><div><p>I chose local speech and language models to explore an office-controlled installation and avoid making the prototype depend on hosted inference for every turn. Speech recognition, the LLM, search and speech synthesis run as separate processes.</p><p className="tradeoff">Trade-off: local execution moves the compute and maintenance burden onto the installation machine. Hardware support and response time need measurement.</p></div></article>
          <article className="case-decision"><h3>Use application code for facts and rules.</h3><div><p>The LLM interprets language; application code performs lookups, maintains state and checks eligible question fields. Listing IDs use exact matching. Candidate scores have visible field contributions rather than an unexplained model confidence value.</p><p className="tradeoff">Trade-off: the scoring weights are initial heuristics. Similar properties, incorrect transcriptions and conflicting clues can still lead to a poor ranking.</p></div></article>
          <article className="case-decision"><h3>Treat “I don’t know” as information.</h3><div><p>A missing answer and an unavailable answer are different states. Unknown fields should constrain future questions. The application validates a structured field identifier alongside the model’s question, with a rule-based fallback if generation fails.</p><p className="tradeoff">Trade-off: wording, state updates and fallback paths must follow the same policy. Repeating an unavailable question was a concrete failure mode uncovered during development.</p></div></article>
          <article className="case-decision"><h3>Start with sample records.</h3><div><p>Fictional listings make candidate scores and dialogue mistakes easier to inspect before connecting a real office database. This prototype uses structured lookup and scoring; PostgreSQL, pgvector and RAG are planned extensions.</p><p className="tradeoff">Trade-off: success against a small sample portfolio does not establish accuracy with real listings or real callers.</p></div></article>
        </section>

        <section className="case-section" id="technology" aria-labelledby="technology-title">
          <div className="eyebrow">04 / Technology choices</div><h2 id="technology-title">A stack chosen for local experimentation.</h2>
          <table className="case-tech"><caption>These are integration choices for the prototype. I did not train the underlying models.</caption><thead><tr><th scope="col">Responsibility</th><th scope="col">Choice</th><th scope="col">Why I chose it</th></tr></thead><tbody>
            <tr><td>Speech boundaries</td><td>Silero VAD · ONNX Runtime</td><td>A dedicated speech detector gives the application an explicit point at which to process an utterance. Silence thresholds remain tunable.</td></tr>
            <tr><td>Turkish transcription</td><td>Whisper large-v3-turbo · whisper.cpp</td><td>Multilingual recognition with a native local runtime. The turbo model is a starting trade-off between recognition quality and compute; speed still needs validation on target hardware.</td></tr>
            <tr><td>Extraction &amp; follow-up</td><td>Qwen3-4B-Instruct-2507 · Q4_K_M · llama.cpp</td><td>A compact instruction model and 4-bit weights keep local experimentation practical. JSON-schema output supports structured extraction and constrained field selection.</td></tr>
            <tr><td>Service APIs &amp; search</td><td>Python · FastAPI · Sample JSON</td><td>Small HTTP services keep model execution and portfolio logic independently testable. JSON records make the first ranking experiments inspectable without a database installation.</td></tr>
            <tr><td>Turkish voice output</td><td>FreyaTTS-small · PyTorch · AudioVAE2</td><td>A locally runnable Turkish speech model provides an optional spoken reply. The current path produces a complete audio file before playback, adding latency.</td></tr>
            <tr><td>Browser interface</td><td>React · TypeScript · Web Audio · WebSocket</td><td>The browser sends audio frames to the local speech service and shows the transcript, search clues and per-turn timings.</td></tr>
            <tr><td>Conversation evaluation</td><td>DeepEval · Local Qwen3.5-9B</td><td>A helper model simulates callers and evaluates conversation quality in a fresh context after each run. Code checks exact outcomes separately.</td></tr>
          </tbody></table>
        </section>

        <section className="case-section" id="evaluation" aria-labelledby="evaluation-title">
          <div className="eyebrow">05 / Evaluation</div><h2 id="evaluation-title">Did the assistant route the call correctly?</h2>
          <p>I built a local DeepEval pilot with five initial text scenarios and synthetic caller details. A simulated caller responds to the actual dialogue controller. After the conversation, an LLM-as-a-judge scores the transcript with a rubric. I took inspiration from <a className="text-link" href="https://arxiv.org/abs/2406.12045" target="_blank" rel="noopener noreferrer">τ-bench ↗</a> for adaptive caller simulation and checking the final state, using my own real-estate scenarios.</p>
          <div className="case-routes">
            <div className="case-route"><b>01 / TASK OUTCOME</b><strong>Check the final state in code.</strong><p>Compare the consultant, phone digits and simulated callback state against the scenario. Some scenarios expect the assistant to leave the match unresolved or respect a refusal to share a phone number.</p></div>
            <div className="case-route"><b>02 / CONVERSATION QUALITY</b><strong>Assess how it asked.</strong><p>The judge scores grounding, continuity, question choice, respect for the caller and clarity. It cites dialogue turns and can explain when another available question would have narrowed the search faster.</p></div>
            <div className="case-route"><b>03 / RUN VALIDITY</b><strong>Check the simulated caller too.</strong><p>In early runs, the simulator changed a phone number or slipped into the assistant’s role. The evaluation flags these runs separately so they do not count toward task success.</p></div>
          </div>
          <div className="case-callout"><p><strong>The pilot isolates dialogue and routing.</strong> DeepEval’s local HTML report shows conversations and scores. The judge is still uncalibrated. The text suite bypasses speech recognition and synthesis. The browser timings support separate audio checks.</p></div>
        </section>

        <section className="case-section" id="limits" aria-labelledby="limits-title">
          <div className="eyebrow">06 / Evidence &amp; limits</div><h2 id="limits-title">A local prototype with sample listings.</h2>
          <div className="case-two-col"><div><h3>Earlier public baseline</h3><p>An initial text-only evaluation covered 20 scenarios. It recorded 15 passes, four failures and one partial result. Several failures involved extracting an explicitly stated location or consultant. The public report documents that earlier version. The DeepEval pilot described above runs in my local development version.</p><a className="project-link" href="https://github.com/mehdi-haydari/turkish-real-estate-voice-assistant/blob/main/docs/initial-text-evaluation.md" target="_blank" rel="noopener noreferrer">Read the initial evaluation ↗</a></div>
          <div><h3>Current limits</h3><ul className="case-list"><li>The prototype uses a browser microphone, fictional listings and simulated callbacks. Real phone calls, a live office database and notifications are future work.</li><li>Listing search uses exact lookup and field-based ranking.</li><li>Speech synthesis generates a complete reply before playback. Per-stage timing helps locate delays on the development machine.</li></ul></div></div>
          <div className="case-callout"><p><strong>Next evaluation step.</strong> Improve caller simulation fidelity, check the judge against deliberately flawed conversations and add harder cases with corrections, unknown answers and rejected candidates.</p></div>
        </section>

        <section className="case-section" id="installation" aria-labelledby="installation-title">
          <div className="eyebrow">07 / Native installation</div><h2 id="installation-title">Keep the source small. Fetch the models.</h2>
          <div className="case-two-col"><div><p>The public repository contains application code, fictional data, tests and a native macOS installer. Model weights, third-party source, Python environments and builds are downloaded into an ignored local directory.</p><p>The installer records upstream revisions and verifies model downloads by size and SHA-256. It supports CPU and Apple Silicon Metal profiles; TTS is optional, with CPU and an MPS option to evaluate.</p></div><div><p>This demonstrates a local deployment approach for an office-controlled installation. First setup needs internet access and several GB of storage; inference uses installed local assets.</p><p><strong>A full first-time installation and audio session on a clean Mac have not yet been verified end to end.</strong> Linux, Windows and unattended office deployment have not been validated.</p></div></div>
          <pre className="case-code"><code>{`# After cloning the repository; prerequisites are in the README.
PYTHON=python3.12 ./setup.sh --with-tts
PYTHON=python3.12 ./run.sh`}</code></pre>
          <div className="case-actions"><a className="action primary" href="https://github.com/mehdi-haydari/turkish-real-estate-voice-assistant" target="_blank" rel="noopener noreferrer">Explore the source <span aria-hidden="true">↗</span></a><a className="action" href="../../index.html#contact">Discuss the project <span aria-hidden="true">↗</span></a></div>
        </section>
        <footer className="case-footer"><span>© 2026 Mehdi Heydari</span><a href="../../index.html#work">← Selected work</a><a className="footer-mark" href="#top">Back to top ↑</a></footer>
      </main>
    </>
  );
}
