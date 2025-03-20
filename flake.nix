{
  description = "A Nix-flake-based Node.js development environment";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {
        inherit system;
      };
    in {
      devShells.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs
          nodePackages.pnpm
        ];

        shellHook = ''
          echo "node `${pkgs.nodejs}/bin/node --version`"
        '';
      };
    });
}
