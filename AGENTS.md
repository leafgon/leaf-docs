# AGENTS.md

## Rules (Hybrid Autonomous Execution Policy)

This policy balances autonomous productivity with enterprise-grade
safety controls.

------------------------------------------------------------------------

## 1. Workspace Boundary

-   The agent may read, write, and execute commands only within the
    repository working directory (WORKDIR).
-   All paths outside WORKDIR (including parent and sibling directories)
    are read-only.
-   The agent must not modify, delete, or execute scripts outside
    WORKDIR.

------------------------------------------------------------------------

## 2. Branch and Main Protection

-   The agent must never commit to main.
-   If currently on main, the agent may only fetch or pull and create a
    new branch.
-   All work must occur on a non-main branch created from the latest
    origin/main.
-   Each pull request should address a single issue or tightly scoped
    change.

------------------------------------------------------------------------

## 3. Git and PR Operations

    The agent may:
    - Create branches from origin/main
    - Edit code within WORKDIR
    - Commit changes to non-main branches
    - Push to origin/non-main-branch
    - Open and update pull requests
    - Rebase its own branch before review begins
    
    The agent must not:
    - Force-push after review has begun
    - Rewrite history of shared or reviewed branches
    - Open PRs that intentionally bypass CI protections
    - Merge any pull request without explicit user permission in the current conversation
    - Close any issue without explicit user permission in the current conversation

------------------------------------------------------------------------

## 4. GitHub Scope

-   The agent may use gh to read and manage issues and pull requests
    only in: leafgon/leaf-docs
-   "Explicitly authorized by an issue" means:
    -   A GitHub issue in this repository (`leafgon/leaf-docs`)
    -   The issue has the `authorized` label
-   The agent must not:
    -   Modify repository settings
    -   Modify secrets
    -   Change access controls
    -   Perform organization-level operations
    -   Modify CI workflows unless explicitly authorized by an issue

------------------------------------------------------------------------

## 5. Command Execution Safety

    The agent must not: 
    - Use sudo
    - Modify system-wide configuration
    - Execute destructive commands outside WORKDIR
    - Execute remote scripts via piping (for example: curl \| sh)
    - Print environment variables or tokens
    
    Dependency installation must use the repository standard tooling.

------------------------------------------------------------------------

## 6. Quality and Security Gates (Required Before PR)

Before pushing or opening a pull request, the agent must:

-   Run repository standard checks (tests, lint, build, typecheck as applicable)
-   Ensure all checks pass locally
-   Ensure no secrets are committed
-   Ensure dependency changes are justified and minimal
-   Ensure production code paths fail fast when required credentials or API keys are missing (no silent stubs)
-   Include a clear PR description with:
    -   Linked issue number
    -   Scope summary
    -   Risk assessment (low, medium, high)
    -   Notes on backward compatibility impact (if applicable)

CI remediation policy (including deadlock prevention):

-   If CI fails after PR creation, the agent may attempt remediation once.
-   If the failure is CI-environment-specific and cannot be reproduced locally,
    the single remediation attempt may be a narrowly scoped commit pushed only
    to validate in CI.
-   For CI-only remediation, the PR description must explicitly state:
    -   What could not be reproduced locally
    -   Why the change is limited and safe
    -   Which checks were still run locally
-   If CI still fails after that one remediation attempt, or if the failure
    indicates architectural ambiguity, the agent must stop and request guidance.

------------------------------------------------------------------------

## 7. Dependency and Scope Controls

-   No new dependency may be added without justification in the linked issue.
-   Major version upgrades require explicit issue scope.
-   Refactors outside the issue scope are not permitted.
-   Protected areas (unless explicitly authorized):
    -   .github/workflows/
    -   Deployment or infrastructure manifests
    -   Access control or security configuration files
    -   License files

------------------------------------------------------------------------

## 8. Work Selection and Issue Creation

-   The agent must prioritize implementing existing actionable issues.
-   New issues may be created only when:
    -   A concrete bug or missing requirement is discovered
    -   The issue is not already tracked
-   Each new issue must include:
    -   Clear problem statement
    -   Acceptance criteria
    -   Justification
    -   Impact assessment

The agent must not generate speculative or filler issues to continue
work.

------------------------------------------------------------------------

## 9. Definition of Done

Work is considered complete when:

-   All acceptance criteria are satisfied
-   Tests are added or updated where applicable
-   No regression in existing tests
-   Documentation updated if public interfaces changed
-   CI is passing

------------------------------------------------------------------------

## 10. Stopping and Escalation Conditions

The agent must stop and request further instructions if:

-   No actionable issues remain and no justified new issues can be created
-   Progress is blocked by unmerged PR dependencies
-   CI fails after one remediation attempt
-   A change requires architectural decisions
-   A change introduces backward-incompatible API or schema impact
-   Required permissions or tooling are unavailable

------------------------------------------------------------------------

This hybrid policy enables autonomous development while maintaining
security, traceability, and governance discipline.
