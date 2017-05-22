using contacts_app_server.Model;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using Microsoft.IdentityModel.Tokens;

namespace contacts_app_server.Config
{
    public class TokenBuilder
    {
        public static string Build(User user)
        {
            var handler = new JwtSecurityTokenHandler();
            var expires = DateTime.Now + TokenOptions.ExpiresSpan;

            var identity = new ClaimsIdentity(
                new GenericIdentity(user.Username, "TokenAuth"),
                new[] { new Claim("ID", user.Id.ToString()) }
                );

            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = TokenOptions.Issuer,
                Audience = TokenOptions.Audience,
                SigningCredentials = TokenOptions.SigningCredentials,
                Subject = identity,
                Expires = expires
            });
            return handler.WriteToken(securityToken);
        }
    }
}
