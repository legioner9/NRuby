#!/bin/bash

if ! type rbenv > /dev/null ;then

    echo "rbenv be init"
    git clone https://github.com/rbenv/rbenv.git ~/.rbenv
    ~/.rbenv/bin/rbenv init
    curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash
    mkdir -p "$(rbenv root)"/plugins
    git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
    rbenv install $(rbenv install -l | grep -v - | tail -1)

fi
