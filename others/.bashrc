# NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

# RBENV
eval "$(rbenv init -)"

# OPENSSL
export PATH="/usr/local/opt/openssl/bin:$PATH"

# ALIASES
alias amsterdam='cd ~/workspace/amsterdam'
alias aspen='cd ~/workspace/aspen'
alias carmada='cd ~/workspace/carmada'
alias rome='cd ~/workspace/development/rome'
alias stream='cd ~/workspace/development/stream'
alias development='cd ~/workspace/development'

alias docker-rma='docker rm $(docker ps -qa --no-trunc --filter "status=exited")'
alias docker-rmia='docker rmi $(docker images --filter "dangling=true" -q --no-trunc)'

# HOME BIN
export PATH=$PATH:$HOME/bin

# GIT COMPLETION
[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion || {
    # if not found in /usr/local/etc, try the brew --prefix location
    [ -f "$(brew --prefix)/etc/bash_completion.d/git-completion.bash" ] && \
        . $(brew --prefix)/etc/bash_completion.d/git-completion.bash
}

# GIT AWARE
export GITAWAREPROMPT=~/.bash/git-aware-prompt
source "${GITAWAREPROMPT}/main.sh"

# PROMPT
export PS1="\[\033[38;5;2m\]\u\[$(tput sgr0)\]\[\033[38;5;7m\]:\[\033[38;5;167m\]\w \[\033[38;5;32m\]\$git_branch\[\033[00m\] \\$ \[$(tput sgr0)\]"
