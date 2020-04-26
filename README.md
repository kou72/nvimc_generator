# NeoVimC Generator

NeoVimのconfigmファイルを簡単に作成するサービスです。  
https://nvimc-generator.web.app/

## plugin

### ディレクトリツリー

[preservim/nerdtree](https://github.com/preservim/nerdtree)  
ディレクトリツリーを表示します。

### コメントアウト

[tpope/vim-commentary](https://github.com/tpope/vim-commentary)  
コメントアウトを簡単に行えるようになります。  
よく使うコマンドは以下。  
- `gcc` : 現在の行をコメントアウトします
- `gc` : 選択してる複数の行をまとめてコメントアウトします
  
[sheerun/vim-polyglot](https://github.com/sheerun/vim-polyglot)  
こちらのプラグインを入れることで複数の言語に対応できるようにしています。

### GIT

[tpope/vim-fugitive](https://github.com/tpope/vim-fugitive)  
vimからgitを操作するプラグインです。  

[airblade/vim-gitgutter](https://github.com/airblade/vim-gitgutter)  
gitの差分ステータスを左端に表示します。

### カラースキーム

[joshdick/onedark.vim](https://github.com/joshdick/onedark.vim)  
カラースキームはVScodeっぽくするためにonedarkを導入しています。

### ステータスバー 

[vim-airline/vim-airline](https://github.com/vim-airline/vim-airline)  
ステータスバーをリッチにします。

[vim-airline/vim-airline-themes](https://github.com/vim-airline/vim-airline-themes)  
ステータスバーのテーマはtomorrowを選択しています。

### neoclide/coc.nvim

