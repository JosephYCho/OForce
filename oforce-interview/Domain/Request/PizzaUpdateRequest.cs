﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace oforce_interview.Domain.Request
{
    public class PizzaUpdateRequest:PizzaInsertRequest
    {
        [Range(1,int.MaxValue)]
        public int Id { get; set; }
    }
}
