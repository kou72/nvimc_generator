# NeoVimC Generator

NeoVimのconfigmファイルを簡単に作成するサービスです。  
https://nvimc-generator.web.app/

## plugin

- [preservim/nerdtree](https://github.com/preservim/nerdtree)  
  - ディレクトリツリーを表示します。
- [tpope/vim-commentary](https://github.com/tpope/vim-commentary)  
  - コメントアウトを簡単におこなえるようになります。よく使うコマンドは以下。  
    - `gcc` : 現在の行をコメントアウトします
    - `gc` : 選択してる複数の行をまとめてコメントアウトします
- [sheerun/vim-polyglot](https://github.com/sheerun/vim-polyglot)  
  - commentaryの機能が言語に対応できるようにしています。
- [tpope/vim-fugitive](https://github.com/tpope/vim-fugitive)  
   - vimからgitを操作できるようにします。  
- [airblade/vim-gitgutter](https://github.com/airblade/vim-gitgutter)  
  - gitの差分ステータスを左端に表示します。
- [joshdick/onedark.vim](https://github.com/joshdick/onedark.vim)  
   - カラースキームはVScodeっぽくするためにonedarkにしました。
- [vim-airline/vim-airline](https://github.com/vim-airline/vim-airline)  
  - ステータスバーをリッチにします。
- [vim-airline/vim-airline-themes](https://github.com/vim-airline/vim-airline-themes)  
  - ステータスバーのテーマはtomorrowにしました。
- [neoclide/coc.nvim](https://github.com/neoclide/coc.nvim)
  - 補完、エラー、フォーマットを全てカバーする強力なpluginです。
  
## mapping
  
キーマップは(一旦)好みで設定したものを初期値に設定してます。

## License
MIT

