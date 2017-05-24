# Git bonus

> Collection of git commands

<!-- inject:toc -->
* [Clone a single branch in git](#clone-a-single-branch-in-git)
* [Compare two revisions of a file](#compare-two-revisions-of-a-file)
* [Compare current staged file against the repository](#compare-current-staged-file-against-the-repository)
* [Compare current unstaged file against the repository](#compare-current-unstaged-file-against-the-repository)
* [Delete a branch on a remote repository](#delete-a-branch-on-a-remote-repository)
* [Checkout a branch on a remote repository](#checkout-a-branch-on-a-remote-repository)
* [Undo the last commit, leaving changes in the the index](#undo-the-last-commit,-leaving-changes-in-the-the-index)
* [Undo `git add` before commit](#undo-`git-add`-before-commit)
* [Caching you HTTPS password in git](#caching-you-https-password-in-git)
* [Commit case-sensitive only filename changes in git](#commit-case-sensitive-only-filename-changes-in-git)
<!-- endinject -->

<!-- inject:content -->
## Clone a single branch in git
```sh
git clone user@git-server:project_name.git -b branch_name /some/folder
```
## Compare two revisions of a file
```sh
git diff <commit1> <commit2> <file_name>
```
## Compare current staged file against the repository
```sh
git diff --staged <file_name>
```
## Compare current unstaged file against the repository
```sh
git diff <file_name>
```
## Delete a branch on a remote repository
```sh
git push origin :mybranchname
```
## Checkout a branch on a remote repository
```sh
git checkout -b mybranchname origin/mybranchname
```
## Undo the last commit, leaving changes in the the index
```sh
git reset --soft HEAD^
```
## Undo `git add` before commit
```sh
git reset <file>
```
## Caching you HTTPS password in git
```sh
git config --global credential.helper store
```
## Commit case-sensitive only filename changes in git
```sh
git mv -f OldFileNameCase newfilenamecase
```
<!-- endinject -->
